import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from "next/router";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchNews } from '../../store/actions-creators/new';

import MainLayout from '../../layouts/MainLayout';
import NewList from '../../components/NewList';

const Index = () => {

	const router = useRouter()
	const { news, error } = useTypedSelector(state => state.new1)

	if (error) {
		return <MainLayout>
			<h1>{error}</h1>
		</MainLayout>
	}
	return (
		<>
			<MainLayout title={"Новости - Добродея"}>
				Новости
				<button onClick={() => router.push('/news/create')}>
					Добавить
				</button>
				<NewList news={news} />
			</MainLayout>

		</>
	);
};

export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
	const { store, query } = context;
	const dispatch = store.dispatch as NextThunkDispatch;
	await dispatch(await fetchNews(query))
})