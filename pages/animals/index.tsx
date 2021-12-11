import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from "next/router";


import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchAnimals } from "../../store/actions-creators/animal";

import AnimalList from "../../components/AnimalList";
import MainLayout from '../../layouts/MainLayout';


const Index = () => {
	const router = useRouter()
	const { animals, error } = useTypedSelector(state => state.animal)



	if (error) {
		return <MainLayout>
			<h1>{error}</h1>
		</MainLayout>
	}
	return (
		<>
			<MainLayout title={"Список животных - Добродея"}>
				Список животных
				<button onClick={() => router.push('/animals/create')}>
					Загрузить
				</button>
				<AnimalList animals={animals} />
			</MainLayout>

		</>
	);
};

export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
	const { store, query } = context;
	const dispatch = store.dispatch as NextThunkDispatch;
	await dispatch(await fetchAnimals(query))
})