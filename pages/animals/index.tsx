import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { useRouter } from "next/router";
import AnimalList from "../../components/AnimalList";
import { Dispatch } from "react";

import { useActions } from "../../hooks/useActions";

import { fetchAnimals } from "../../store/actions-creators/animal";

import { IAnimal } from "../../types/animal";

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

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchAnimals())
})