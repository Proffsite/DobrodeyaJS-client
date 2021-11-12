import React, { useState } from 'react';
import { IAnimal } from "../../types/animal";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useInput } from "../../hooks/useInput";

const AnimalPage = ({ serverAnimal }) => {
    const [animal, setAnimal] = useState<IAnimal>(serverAnimal)
    const router = useRouter()
    const username = useInput('')
    const text = useInput('')

    // const addComment = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:5000/tracks/comment', {
    //             username: username.value,
    //             text: text.value,
    //             trackId: track._id
    //         })
    //         setTrack({ ...track, comments: [...track.comments, response.data] })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    return (
        <MainLayout
            title={"Приют Добродея, г.Белоярский - " + animal.name + " - " + animal.text}
            keywords={'Приют, добродея, ' + animal.name + ", " + animal.text}
        >
            <button
                style={{ fontSize: 32 }}
                onClick={() => router.push('/animals')}
            >
                К списку
            </button>
            <div>
                <img src={'http://localhost:5000/' + animal.picture} width={200} height={200} />
                <div style={{ marginLeft: 30 }}>
                    <h1>{animal.name}</h1>
                    <h1>Пол: {animal.sex}</h1>
                    <h1>Возраст: {animal.age}</h1>
                </div>
            </div>
            <h1>Описание:</h1>
            <p>{animal.text}</p>
            {/* <h1>Комментарии</h1>
            <Grid container>

                <TextField
                    label="Ваше имя"
                    fullWidth
                    {...username}
                />
                <TextField
                    label="Комментарий"
                    {...text}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={addComment}>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div> */}
        </MainLayout>
    );
};

export default AnimalPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get('http://localhost:5000/animals/' + params.id)
    return {
        props: {
            serverAnimal: response.data
        }
    }
}
