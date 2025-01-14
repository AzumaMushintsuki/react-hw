import {FC} from "react";
import {IUserCardProps} from "../../models/Props.ts";
import {useNavigate} from "react-router";

const UserCard:FC<IUserCardProps> = ({user}) => {
    const navigate = useNavigate()
    const handlerOnClick=()=>navigate( user.id + '/carts')
    return (
        <div className='user-card'>
            <h3>{user.id}. {user.firstName} {user.lastName}</h3>
            <h4>{user.age} years old, {user.gender}</h4>
            <button onClick={handlerOnClick}>Unpaid Carts</button>
        </div>
    );
};

export default UserCard;