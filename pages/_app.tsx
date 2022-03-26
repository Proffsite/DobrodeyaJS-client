import React, { FC } from 'react';
import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import "../css/customcss.scss";

import { NextThunkDispatch, wrapper } from '../store';
import { parseCookies } from 'nookies';
import { UserApi } from '../utils/api';
import { setUserData } from '../store/actions-creators/user';
import { GetServerSideProps } from 'next';
import { fetchAnimals } from '../store/actions-creators/animal';
import { fetchNews } from '../store/actions-creators/new';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Component {...pageProps} />
	)
};

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
// 	const { store, query } = context;
// 	const dispatch = store.dispatch as NextThunkDispatch;
// 	await dispatch(await fetchAnimals(query))
// 	await dispatch(await fetchNews(query))
// 	console.log('_appAPPPPPPPPPPPPPPPPPPPPPPPPP')

// 	try {
// 		const { authToken } = parseCookies(context);
// 		const userData = await UserApi.getMe(authToken);
// 		await dispatch(await setUserData(userData))
// 	} catch (error) {
// 		console.log(error);
// 		return { props: {} }
// 	}
// });


export default wrapper.withRedux(WrappedApp);
