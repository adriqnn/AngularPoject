import { IRole } from "./Role";

export interface IUser{
    _id: string;
    username: string;
    email: string;
    roles: IRole[];
    createdAt: string;
    created_at: string;
    updatedAt: string;
};