import React, { useState } from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepTracker from "../../components/StepTracker";
import FileUpload from "../../components/FileUpload";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import { useRouter } from "next/router";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const name = useInput('')
    const sex = useInput('')
    const text = useInput('')
    const age = useInput('')
    const type = useInput('')
    const router = useRouter()
    const next = () => {
        if (activeStep !== 1) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('text', text.value)
            formData.append('sex', sex.value)
            formData.append('age', age.value)
            formData.append('picture', picture)
            formData.append('type', type.value)
            axios.post('http://localhost:5000/animals', formData)
                .then(resp => router.push('/animals'))
                .catch(e => console.log(e))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    return (
        <MainLayout>
            <StepTracker activeStep={activeStep}>
                {activeStep === 0 &&
                    <form>
                        <p>ВВедите Имя</p>
                        <input type="text"
                            {...name}
                            style={{ marginTop: 10 }}
                        />
                        <p>ВВедите пол (М, Ж)</p>
                        <input type="text"
                            {...sex}
                            style={{ marginTop: 10 }}
                        />
                        <p>ВВедите Описание</p>
                        <textarea
                            type="text"
                            rows="3"
                            {...text}
                            style={{ marginTop: 10 }}
                        />
                        <p>Введите примерный возраст</p>
                        <input type="text"
                            {...age}
                            style={{ marginTop: 10 }}
                        />
                        {/* <input type="radio" id="huey" name="drone" {...type}
                            checked />
                        <label for="huey">CATS</label>
                        <input type="radio" id="huey" name="drone" {...type}
                            checked />
                        <label for="huey">DOGS</label> */}
                        <p>ВВедите вид животного (Кошка, Собака, Дома)</p>
                        <input type="text"
                            {...type}
                            style={{ marginTop: 10 }}
                        />
                    </form>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept="image/*">
                        <button>Загрузить изображение</button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <button>Загрузить аудио</button>
                }
            </StepTracker>
            <div>
                <button disabled={activeStep === 0} onClick={back}>Назад</button>
                <button onClick={next}>Далее</button>
            </div>
        </MainLayout>
    );
};

export default Create;
