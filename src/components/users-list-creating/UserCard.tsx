import {FC} from "react";
import {UserPropsType} from "../../models/UserProps.ts";


const UserCard:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <h4>{user.id}. {user.firstName} {user.lastName}</h4>
        </div>
    );
};

export default UserCard;