import { Link } from "react-router-dom";
import { Container, Profile } from "./styles";

import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <h2>RocketMovies</h2>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <Link to="/profile"><strong>Andrey Dantas</strong></Link>
                    <span>sair</span>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/andreydantasvf.png" alt="Foto de usuário" />
                </Link>
            </Profile>
        </Container>
    )
}