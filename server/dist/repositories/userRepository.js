"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const user_1 = __importDefault(require("../dto/user"));
class UserRepository {
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new User_1.default(user);
                const savedUser = yield newUser.save();
                return new user_1.default(savedUser);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error in ${this.constructor.name} save method: ${error.message}`);
                }
                throw new Error('An unknown error occurred in UserRepository save method.');
            }
        });
    }
    findOne(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ email: userEmail }).lean();
                if (!user) {
                    throw new Error(`User with email ${userEmail} not found.`);
                }
                return new user_1.default(user);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error in ${this.constructor.name} findOne method: ${error.message}`);
                }
                throw new Error('An unknown error occurred in UserRepository findOne method.');
            }
        });
    }
}
exports.default = UserRepository;
