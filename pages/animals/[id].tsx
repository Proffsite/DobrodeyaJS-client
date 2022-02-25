import React, { useState } from 'react';
import Image from 'next/image'
import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";


import { IAnimal } from "../../types/animal";
import MainLayout from '../../layouts/MainLayout';

const AnimalPage = ({ serverAnimal }) => {
	const [animal, setAnimal] = useState<IAnimal>(serverAnimal)
	const router = useRouter()

	return (
		<MainLayout
			title={"Приют Добродея, г.Белоярский - " + animal.name + " - " + animal.text}
			keywords={'Приют, добродея, ' + animal.name + ", " + animal.text}
		>
			<button
				style={{ fontSize: 32 }}
				onClick={() => router.back()}
			>
				К списку
			</button>
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-sm-12 p-10 mb-3">
						<Image
							src={'http://localhost:5000/' + animal.picture}
							alt="Animals from priut Dobrodeya86"
							width={525}
							height={700} />
					</div>
					<div className="col-md-7 col-sm-12 p-0 mb-3 ps-3">
						<h1>{animal.name}</h1>
						<div>Пол: <b>{animal.sex}</b></div>
						<div className="mb-2">Возраст: <b>{animal.age}</b></div>
						<div className="ms-1 fs-3">Описание:</div>
						<div>{animal.text}</div>
						<div>{animal.date}</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default AnimalPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const response = await axios.get('http://localhost:5000/animals/' + params.id)
	return {
		props: {
			serverAnimal: response.data
		}
	}
}
