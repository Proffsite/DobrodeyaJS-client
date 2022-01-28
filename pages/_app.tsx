import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from "../store";


import 'bootstrap/dist/css/bootstrap.css';
import "../css/customcss.scss";



const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);



export default wrapper.withRedux(WrappedApp);