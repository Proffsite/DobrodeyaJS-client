import React from 'react';
import { INew } from "../types/new";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { newsDelete } from '../store/actions-creators/new';
import { string } from 'yup/lib/locale';

interface NewItemProps {
	new1: INew;
	active?: boolean;
}

const NewItem: React.FC<NewItemProps> = ({ new1, active = false }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const onRemoveFromBasket = () => {
		dispatch(newsDelete(new1._id));
	}
	return (
		<div className="col-lg-3 col-md-6 col-sm-12 my-3">
			<div className="foto">
				<a onClick={() => router.push('/news/' + new1._id)}>
					<img className="full-width" src={'http://localhost:5000/' + new1.picture} />
				</a>
			</div>
			<div>Размещено:{new1.date}</div>
			<div>{new1.name}</div>
			<div style={{ fontSize: 12, color: 'gray' }}>{new1.text}</div>
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

export default NewItem;

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     const dispatch = context.store.dispatch as NextThunkDispatch
//     await dispatch(await animalsDelete(_id))
// })