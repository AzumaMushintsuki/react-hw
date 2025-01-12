import {IUser} from "./IUser.ts";
import {IPost} from "./IPost.ts";
import {ICart} from "./ICart.ts";

export interface IResponse {
    carts?: ICart[];
    posts?: IPost[];
    users?: IUser[];
    total: number;
    skip: number;
    limit: number;
}