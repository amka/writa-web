import { BaseModel } from './BaseModel'

class User extends BaseModel {
    email: string;
    token?: string;
    firstName?: string;
    lastName?: string;

    constructor(email: string) {
        super();
        this.email = email;
    }
}

export default User;