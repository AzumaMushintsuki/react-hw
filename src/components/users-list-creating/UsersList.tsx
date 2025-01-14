import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getUsers} from "../../services/api.services.ts";
import {IUser} from "../../models/IUser.ts";
import UserCard from "./UserCard.tsx";


const UsersList = () => {
    const [users,setUsers]=useState<IUser[]>([]);
    const [query]=useSearchParams();
    useEffect(()=>{
        getUsers(query.get('page')||`1`)
            .then(res=>setUsers(res.users))
    },[query])
    return (
        <div>
            {users.map(user=><UserCard key = {user.id} user = {user}/>)}
        </div>
    );
};

export default UsersList;