import {useEffect, useState} from 'react';
import {userService} from "../../servises/api.services.ts";
import {IUser} from "../../models/IUser.ts";
import UserCard from "./UserCard.tsx";

const UserCardList = () => {
    const [users, setUsers]=useState<IUser[]>([])
    useEffect(()=>{
        userService.getUsers().then(apiUsers=>setUsers(apiUsers))
    },[])
    return (
        <div className='users-list'>
            {users.map(user=><UserCard key = {user.id} user={user}/>)}
        </div>
    );
};

export default UserCardList;