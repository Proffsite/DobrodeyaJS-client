import React, { useState } from 'react';
import Image from 'next/image'
import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";


import { INew } from "../../types/new";
import { useInput } from "../../hooks/useInput";
import MainLayout from '../../layouts/MainLayout';

const NewPage = ({ serverNew }) => {
	const [new1, setNew1] = useState<INew>(serverNew)
	const router = useRouter()
	const username = useInput('')
	const text = useInput('')

	return (
		<MainLayout
			title={"Приют Добродея, г.Белоярский - " + new1.name + " - " + new1.text}
			keywords={'Приют, добродея, ' + new1.name + ", " + new1.text}
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
						<img
							src={'http://localhost:5000/' + new1.picture}
							alt="News from priut Dobrodeya86"
							width={525}
							height={700} />
					</div>
					<div className="col-md-7 col-sm-12 p-0 mb-3 ps-3">
						<h1>{new1.name}</h1>
						<div>{new1.text}</div>
						<div>Размещено: {new1.date}</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default NewPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const response = await axios.get('http://localhost:5000/news/' + params.id)
	return {
		props: {
			serverNew: response.data
		}
	}
}
