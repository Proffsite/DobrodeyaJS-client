import React from 'react';
import { IAnimal } from "../types/animal";
import AnimalItem from "./AnimalItem";

interface AnimalListProps {
    animals: IAnimal[]
}

const AnimalList: React.FC<AnimalListProps> = ({ animals }) => {
    console.log(animals)
    return (
        <div className="row">

            {animals.map(animal =>
                <AnimalItem
                    key={animal._id}
                    animal={animal}
                />
            )}
        </div>
    );
};

export default AnimalList;
