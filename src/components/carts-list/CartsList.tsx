import {FC, useEffect, useState} from "react";
import {cartService} from "../../servises/api.services.ts";
import {ICart} from "../../models/ICart.ts";
import {ICartListProps} from "../../models/Props.ts";
import CartCard from "./CartCard.tsx";

const CartsList:FC<ICartListProps> = ({userId}) => {
    const [carts, setCarts]=useState<ICart[]>([])
    useEffect(()=>{
        console.log(userId)
        cartService.getCartsByUser(userId)
            .then(apiCarts=>{
                if(apiCarts) setCarts(apiCarts)
            })
        },[userId])
    return (
        <div>
            {
                carts.map(cart=><CartCard key = {cart.id} cart={cart}/>)
            }
        </div>
    );
};
export default CartsList