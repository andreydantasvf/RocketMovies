import { Link, useNavigate } from "react-router-dom";
import { Container, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from '../Input';

export function Header() {
    const { signOut, user } = useAuth();

    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/")
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
                        <img src={avatarUrl} alt={`Foto de ${user.name}`} />
                </Link>
            </Profile>
        </Container>
    )
}