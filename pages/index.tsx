import React from 'react';
import MainLayout from "../layouts/MainLayout";
import Image from 'next/image';
import animal from '../public/main_animal.png';
import Home from "../pages/home";

const Index = () => {
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
                            src={animal}
                            layout="responsive"
                        />
                    </div>
                    <div className="col-sm-3">Хочу помочь</div>

                </div>
                <Home />
            </MainLayout>
        </>
    );
};

export default Index;
