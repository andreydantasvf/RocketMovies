import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi"

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Buttons, Title, Information, Date, Tags, Description } from "./styles";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { RatingMovie } from "../../components/RatingMovie";
import { Tag } from "../../components/Tag";

export function Details() {
    const [data, setData] = useState(null);

    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const params = useParams();
    const navigate = useNavigate();

    async function handleDeleteMovie() {
        const confirm = window.confirm("Deseja realmente remover este filme?");

        if (confirm) {
            await api.delete(`/movie/${params.id}`);
            navigate(-1);
        }
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movie/${params.id}`);
            setData(response.data);
        }

        fetchMovie();
    }, []);
    return (
        <Container>
            <Header />

            {
                data &&
                <main>
                    <Buttons>
                        <BackButton />
                        <button onClick={handleDeleteMovie}>Remover filme</button>
                    </Buttons>

                    <Title>
                        <h2>{data.title}</h2>
                        <RatingMovie rating={data.rating} />
                    </Title>

                    <Information>
                        <img src={avatarUrl} alt={`Foto de ${user.name}`} />
                        Por {user.name}
                        <Date>
                            <BiTimeFive />
                            23/05/22 às 08:00
                        </Date>
                    </Information>

                    {
                        data.tags &&
                        <Tags>
                            {
                                data.tags.map(tag => (
                                    <Tag
                                        key={String(tag.id)}
                                        title={tag.name}
                                    />
                                ))
                            }
                        </Tags>
                    }

                    <Description>
                        {data.description}
                    </Description>
                </main>
            }
        </Container>
    )
}