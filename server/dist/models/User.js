"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Required !'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Required !'],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please provide a valid email address'],
        index: true,
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Required !'],
    },
    phone: {
        type: String,
        trim: true,
        required: [true, 'Required !'],
    },
    address: {
        type: String,
        trim: true,
        maxLength: 250,
    },
    profile_photo: {
        type: String,
        trim: true,
    },
    tokens: {
        type: String,
    },
    created_on: {
        type: String,
        default: Date.now,
    },
    updated_on: {
        type: String,
        default: Date.now,
    },
});
userSchema.index({ email: 1 });
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
