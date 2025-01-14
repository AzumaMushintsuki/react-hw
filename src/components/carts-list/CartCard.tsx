import {FC} from "react";
import {ICartProps} from "../../models/Props.ts";

const CartCard:FC<ICartProps> = ({cart}) => {
    return (
        <div>
            {cart.discountedTotal}
        </div>
    );
};

export default CartCard;