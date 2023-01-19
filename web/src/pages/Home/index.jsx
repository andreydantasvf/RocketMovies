import { Link } from "react-router-dom";
import { FiPlus } from 'react-icons/fi'

import { Container, NewMovie, Content } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
    return (
        <Container>
            <Header></Header>

            <NewMovie>
                <h2>Meus filmes</h2>
                <Link to="/new">
                    <FiPlus />
                    Adicionar filme
                </Link>
            </NewMovie>

            <Content>
                <Movie data={{
                    title: 'Spider-Man',
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                    rating: 4,
                    tags: [
                        { id: '1', name: 'Ficção cientifica' },
                        { id: '2', name: 'Drama' },
                        { id: '3', name: 'Familia' }
                    ]
                }} />

                <Movie data={{
                    title: 'Spider-Man',
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                    rating: 4,
                    tags: [
                        { id: '1', name: 'Ficção cientifica' },
                        { id: '2', name: 'Drama' },
                        { id: '3', name: 'Familia' }
                    ]
                }} />

                <Movie data={{
                    title: 'Spider-Man',
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                    rating: 4,
                    tags: [
                        { id: '1', name: 'Ficção cientifica' },
                        { id: '2', name: 'Drama' },
                        { id: '3', name: 'Familia' }
                    ]
                }} />
            </Content>
        </Container>
    )
}