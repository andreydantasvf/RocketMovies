import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus } from 'react-icons/fi'

import { Container, NewMovie, Content } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Input } from "../../components/Input";

export function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movie?title=${search}&tags=`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [search]);

    return (
        <Container>
            <Header>
                <Input
                    placeholder="Pesquisar pelo título"
                    onChange={e => setSearch(e.target.value)}
                />
            </Header>

            <NewMovie>
                <h2>Meus filmes</h2>
                <Link to="/new">
                    <FiPlus />
                    Adicionar filme
                </Link>
            </NewMovie>

            <Content>
                {
                    movies.map(movie => (
                        <Movie
                            key={String(movie.id)}
                            data={movie}
                            onClick={() => handleDetails(movie.id)}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}