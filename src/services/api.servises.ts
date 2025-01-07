import {ITodo} from "../models/ITodo.ts";

export const getToDos = async (): Promise<ITodo[]> => {
    return await fetch(import.meta.env.VITE_API_URL).then(toDos => toDos.json())
}
