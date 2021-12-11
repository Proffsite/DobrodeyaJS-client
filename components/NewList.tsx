import React from 'react';
import { INew } from "../types/new";
import NewItem from "./NewItem";

interface NewListProps {
	news: INew[]
}

const NewList: React.FC<NewListProps> = ({ news }) => {
	return (
		<div className="row">

			{news.map(new1 =>
				<NewItem
					key={new1._id}
					new1={new1}
				/>
			)}
		</div>
	);
};

export default NewList;