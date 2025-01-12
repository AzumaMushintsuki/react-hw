import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";
import {ICart} from "../models/ICart.ts";

export const userService = {
    getUsers: async ():Promise<IUser[]> =>{
        console.log(import.meta.env.VITE_BASE_URL + '/users')
        return await fetch(import.meta.env.VITE_BASE_URL + '/users')
            .then(res=>res.json())
            .then(res=>{console.log(res, res.users); return res.users})
    }
};

export const postService= {
    getPosts: async ():Promise<IPost[]> =>{
        return await fetch(import.meta.env.VITE_BASE_URL + '/posts')
            .then(res=>res.json())
            .then(res=>res.posts)
    }
}
export const cartService = {
    getCartsByUser: async (id:number):Promise<ICart[] | null> =>{
        return await fetch(import.meta.env.VITE_BASE_URL + '/carts/user/' + {id})
            .then(res=>res.json())
            .then(res=>res.carts)
    }
}