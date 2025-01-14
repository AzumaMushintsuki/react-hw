import UserCardList from "../components/users-list-creator/UserCardList.tsx";
import {Outlet} from "react-router";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <UserCardList/>

        </div>
    );
};

export default UsersPage;