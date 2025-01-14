
import {IResponse} from "../models/IResponse.ts";

export const getUsers = async (page:string):Promise<IResponse> => {
    return await fetch('https://dummyjson.com/users?skip=' + (+page - 1) * 30)
        .then(res => res.json())
}