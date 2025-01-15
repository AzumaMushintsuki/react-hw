import {useState} from "react";
import {getCars} from "../../services/api.services.ts";
import {ICar} from "../../models/ICar.ts";
import CarCard from "./CarCard.tsx";


const CarsList = () => {
    const [cars, setCars] = useState<ICar[]>([])
    getCars().then(res=>setCars(res))
    return (
        <div className='cars-list'>
            {cars.map(car => <CarCard key={car.id} car={car}/> )}
        </div>
    );
};

export default CarsList;