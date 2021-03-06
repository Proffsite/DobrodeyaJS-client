import React from 'react';
import Image from 'next/image';
import logo from '../public/logosobaka.png';
import { useRouter } from "next/router";
import Link from 'next/link';

const menuItemsLeft = [
	{ text: 'О Приюте', href: '/' },
	{ text: 'Кошки', href: '/animals?type=CAT' },
	{ text: 'Собаки', href: '/animals?type=DOGS' },
	{ text: 'Уже дома', href: '/home?type=HOME' }
]
const menuItemsRight = [
	{ text: 'Как помочь приюту?', href: '/help' },
	{ text: 'Фин.Отчёт', href: 'https://vk.com/topic-172407402_39312828' },
	{ text: 'Новости', href: '/news' },
	{ text: 'Контакты', href: '/contacts' }
]
interface NavbarProps {

}

const Navbar: React.FC = () => {
	const router = useRouter();
	return (
		<>
			<header>
				<div className="container">
					<div className="row nav_menu align-items-center">
						<div className="col-sm-5">
							<ul>
								{menuItemsLeft.map(({ text, href }, index) => (
									<li key={index}>
										<Link href={href}>
											<a className={router.asPath === href ? "activeMenu" : ''}> {text} </a>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="col-sm-2 logo_menu">
							<Link href="/">
								<a className={router.pathname == "/" ? "deactive" : ""}>
									<Image
										alt="Dobrodeya86"
										src={logo}
										layout="fixed"
										width={200}
										height={100}
									/>
								</a>
							</Link>
						</div>
						<div className="col-sm-5">
							<ul className="items-end">
								{menuItemsRight.map(({ text, href }, index) => (
									<li key={index}>
										<Link href={href}>
											<a className={router.asPath === href ? "activeMenu" : ''}> {text} </a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>

	);
};

export default Navbar;