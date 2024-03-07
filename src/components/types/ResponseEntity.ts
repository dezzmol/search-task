import {User} from "./User.ts";

export interface ResponseEntity {
    users: Array<User>;
    total: number;
    skip: number;
    limit: number;
}