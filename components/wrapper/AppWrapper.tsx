import React, { ReactNode, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
//import PopupBilling from '../../UI/template/PopupBilling'
//import 'react-multi-carousel/lib/styles.css'
import { RootState } from '../../store/reducers'


export interface IAppWrapper {
	children: JSX.Element | ReactNode,
	billing?: any,
	isLogin?: any,
	actGetListMyIklan?: any,
	actGetIsLogin?: any,
}

// const mapState = (state: RootState) => ({
// 	billing: state.users.billing,
// 	isLogin: state.users.isLogin
// })

// const mapDispatch = {
// 	actGetListMyIklan: () => ({ type: 'GET_LIST_MY_IKLAN' }),
// 	actGetIsLogin: () => ({ type: 'GET_IS_LOGIN' }),
// }

// const connector = connect(mapState, mapDispatch)
//type PropsFromRedux = ConnectedProps<typeof connector>

const AppWrapper: React.FC<IAppWrapper> = ({ children,
	billing,
	isLogin,
	actGetListMyIklan,
	actGetIsLogin,
}) => {
	// useEffect(() => {
	// 	actGetIsLogin()
	// }, [])

	// useEffect(() => {
	// 	if (isLogin) actGetListMyIklan()
	// 	if (isLogin && billing) {
	// 		//socket.emit('updateUserOnline', { userId: billing.user.id, status: true })
	// 	}
	// }, [isLogin])

	return (
		<>
			{children}

			{/* {(isLogin && !billing) && (<PopupBilling />)} */}
		</>
	)
}

AppWrapper;