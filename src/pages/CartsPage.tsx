import {useParams} from "react-router";
import CartsList from "../components/carts-list/CartsList.tsx";

const CartsPage = () => {
    const {userId} = useParams();


    return (
        <div>
            {userId && <CartsList userId={userId}/>}
        </div>
    );
};
export default CartsPage;