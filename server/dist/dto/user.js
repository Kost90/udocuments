"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDTO {
    constructor(data) {
        this.id = data._id;
        this.email = data.email;
        this.name = data.name;
        this.password = data.password;
        this.phone = data.phone;
        this.address = data.address;
        this.profile_photo = data.profile_photo || null;
        this.tokens = data.tokens;
    }
}
exports.default = UserDTO;
