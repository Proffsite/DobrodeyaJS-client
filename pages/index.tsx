import React from 'react';
import MainLayout from "../layouts/MainLayout";
import Image from 'next/image';
import { GetServerSideProps } from 'next';


import animal_img from '../public/main_animal.png';
import HelpStatic from '../components/static/HelpStatic';
import { NextThunkDispatch, wrapper } from "../store";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchAnimals } from '../store/actions-creators/animal';
import AnimalList from '../components/AnimalList';
import { fetchNews } from '../store/actions-creators/new';
import NewList from '../components/NewList';



const Index = () => {
	const { animals, error } = useTypedSelector(state => state.animal)
	const { news } = useTypedSelector(state => state.new1)

	const NotHomeAnimal = animals.filter(item => item.type !== 'HOME')
	const HomeAnimal = animals.filter(item => item.type == 'HOME')
	// Спросить почему нельзя так добавить в вывод страницы animals.filter(item => item.type !== 'HOME')

	if (error) {
		return <MainLayout>
			<h1>{error}</h1>
		</MainLayout>
	}

	return (
		<>
			<MainLayout>
				<div className="row align-items-center">
					<div className="col-sm-3 title">
						Мы Тебя ждём.<br />
						Ты заходи, если что!
					</div>
					<div className="col-sm-6">
						<Image
							alt="Main animal"
							src={animal_img}
							layout="responsive"
						/>
					</div>
					<div className="col-sm-3 button">
						<button className="ripple">Хочу помочь</button></div>
				</div>
				<div className="container pt-5 image-back">
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<div className="title">Приют для животных “Добродея”</div>
							<p>
								Что убеждённость некоторых оппонентов создаёт предпосылки для
								вывода текущих активов.Следует отметить, что курс на
								социально-ориентированный национальный проект способствует
								повышению качества глубокомысленных рассуждений.
							</p>
							<p>
								Равным образом, выбранный нами инновационный путь требует
								анализа экономической целесообразности принимаемых решений.С
								учётом сложившейся международной обстановки, сплочённость
								команды профессионалов способствует повышению качества системы
								обучения кадров, соответствующей насущным потребностям.
							</p>
						</div>
						<div className="block col-md-6 col-sm-12">
							<div className="block_numbers">
								<div className="items">
									<div className="item">
										<div className="icon">
											<Image
												src="/../public/in_priut.png"
												alt="InDobrodeya"
												layout='fixed'
												width={70}
												height={52}
											/>
										</div>
										<div className="number">
											{NotHomeAnimal.length + 1}
										</div>
										<div className="name">Сейчас <br />в приюте</div>
									</div>
									<div className="item">
										<div className="icon">
											<Image
												src="/../public/out_priut.png"
												alt="InDobrodeya"
												layout='fixed'
												width={70}
												height={57}
											/>
										</div>
										<div className="number">{HomeAnimal.length + 1}</div>
										<div className="name">Нашли <br />свой дом</div>
									</div>
								</div>
							</div>
							<div className="block_inner">

							</div>
						</div>
					</div>
				</div>
				<HelpStatic />
				<h1>Ищут дом: </h1>
				<AnimalList animals={animals.slice(0, 4)} />
				<h1>Последние новости: </h1>
				<NewList news={news.slice(0, 4)} />
			</MainLayout>
		</>
	);
};

export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
	const { store, query } = context;
	const dispatch = store.dispatch as NextThunkDispatch;
	await dispatch(await fetchAnimals(query))
	await dispatch(await fetchNews(query))
})