import {FC} from 'react';
import {simpsons} from "../data/simpsons.ts";
import CharacterComponent from "./CharacterComponent.tsx";
import {ISimpson} from "../models/ISimpson.ts";
import './FamilyComponent.css'

const FamilyComponent:FC = () => {
    return (
        <div className='family-container'>
            {
                simpsons.map((item:ISimpson, index:number) =>
                <CharacterComponent character={item} key={index} >
                    {item.info}
                </CharacterComponent>)
            }
        </div>
    );
};

export default FamilyComponent;