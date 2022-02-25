import React, { FC } from 'react';
import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import "../css/customcss.scss";

import { wrapper } from '../store';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Component {...pageProps} />
	)
};

export default wrapper.withRedux(WrappedApp);
