import { Link, useNavigate } from "react-router-dom";
import { Container, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Input } from '../Input';

export function Header() {
    const { signOut } = useAuth();

    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/")
        signOut();
    }
    return (
        <Container>
            <h2>RocketMovies</h2>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <Link to="/profile"><strong>Andrey Dantas</strong></Link>
                    <button onClick={handleSignOut}>sair</button>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/andreydantasvf.png" alt="Foto de usuário" />
                </Link>
            </Profile>
        </Container>
    )
}