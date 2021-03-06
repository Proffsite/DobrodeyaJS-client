import React from 'react';
import { IAnimal } from "../types/animal";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { animalsDelete } from '../store/actions-creators/animal';
import { string } from 'yup/lib/locale';

interface AnimalItemProps {
	animal: IAnimal;
	active?: boolean;
}

const AnimalItem: React.FC<AnimalItemProps> = ({ animal, active = false }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const onRemoveFromBasket = () => {
		dispatch(animalsDelete(animal._id));
	}


	return (

		<div className="col-lg-3 col-md-6 col-sm-12 my-3">
			<div className="foto">
				<a onClick={() => router.push('/animals/' + animal._id)}>
					<img className="full-width" src={'http://localhost:5000/' + animal.picture} />
				</a>
			</div>
			<div>Размещено:{animal.date}</div>
			<div>{animal.name}</div>
			<div style={{ fontSize: 12, color: 'gray' }}>{animal.text}</div>
			<button
				className=""
				onClick={onRemoveFromBasket}
				type="button"
			>
				Удалить
			</button>
		</div>
	);
};

export default AnimalItem;

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     const dispatch = context.store.dispatch as NextThunkDispatch
//     await dispatch(await animalsDelete(_id))
// })