import Pagination from "../components/pagination/Pagination.tsx";
import UsersList from "../components/users-list-creating/UsersList.tsx";

const UsersPage = () => {
    return (
        <div>
            <Pagination/>
            <UsersList/>
            <Pagination/>
        </div>
    );
};

export default UsersPage;