import {FC} from "react";
import {IUserCardProps} from "../../models/Props.ts";

const UserCard:FC<IUserCardProps> = ({user}) => {
    return (
        <div>
            <h3>{user.id}. {user.firstName} {user.lastName}</h3>
            <h4>{user.age} years old, {user.gender}</h4>
        </div>
    );
};

export default UserCard;