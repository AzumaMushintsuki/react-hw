import {FC} from "react";
import {ICarProps} from "../../models/props.ts";


const CarCard:FC<ICarProps> = ({car}) => {
    return (
        <div className='car-card'>
            <h4>{car.brand} {car.year}</h4>
            <h3>{car.price}</h3>
        </div>
    );
};

export default CarCard;