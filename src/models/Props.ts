import {IUser} from "./IUser.ts";
import {IPost} from "./IPost.ts";
import {ICart} from "./ICart.ts";

export interface IUserCardProps {
    user:IUser
}

export interface IPostCardProps {
    post:IPost
}

export interface ICartListProps {
    userId:string
}

export interface ICartProps {
    cart: ICart
}