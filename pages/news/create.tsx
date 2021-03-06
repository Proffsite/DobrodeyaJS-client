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
	const text = useInput('')
	const router = useRouter()
	const next = () => {
		if (activeStep !== 1) {
			setActiveStep(prev => prev + 1)
		} else {
			const formData = new FormData()
			formData.append('name', name.value)
			formData.append('text', text.value)
			formData.append('picture', picture)
			axios.post('http://localhost:5000/news', formData)
				.then(resp => router.push('/news'))
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
						<p>Введите заглавие новости
							<input type="text"
								{...name}
								style={{ marginTop: 10 }}
							/></p>
						<p>Введите текст новости</p>
						<textarea
							type="text"
							rows="3"
							{...text}
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
			<div className="pb-5">
				<button className={`ripple {activeStep === 0 ? "disabled" : ""}`} onClick={back}>Назад</button>
				<button onClick={next}>Далее</button>
			</div>
		</MainLayout>
	);
};

export default Create;
