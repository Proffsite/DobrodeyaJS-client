import React from 'react';
import { IAnimal } from "../types/animal";
import { useRouter } from "next/router";
import { useActions } from "../hooks/useActions";

interface AnimalItemProps {
    animal: IAnimal;
    active?: boolean;
}

const AnimalItem: React.FC<AnimalItemProps> = ({ animal, active = false }) => {
    const router = useRouter()

    return (

        <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            <a onClick={() => router.push('/animals/' + animal._id)}>
                <img className="full-width" src={'http://localhost:5000/' + animal.picture} />
            </a>
            <div>{animal.name}</div>
            <div style={{ fontSize: 12, color: 'gray' }}>{animal.text}</div>
        </div>
    );
};

export default AnimalItem;
