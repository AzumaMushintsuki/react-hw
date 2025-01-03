import {FC} from 'react';
import {ICharacterProps} from "../models/ICharacterProps.ts";
import './CharacterComponent.css'

const CharacterComponent: FC<ICharacterProps> = ({character, children}) => {
    return (
        <div className='character-card'>
            <h2>{character.name} {character.surname}</h2>
            <h3>Age: {character.age}</h3>
            <img src={character.photo} alt={character.name}/>
            <p>{children}</p>

        </div>
    );
};

export default CharacterComponent;