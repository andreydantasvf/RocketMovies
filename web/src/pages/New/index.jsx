import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { MovieItem } from '../../components/MovieItem';

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        if (tags.includes(newTag)) {
            return alert("Essa tag já foi adicionada!");
        }
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Digite o título do filme.");
        }

        if (!rating) {
            return alert("Digite a nota do filme.");
        }

        if (rating < 0 || rating > 5) {
            return alert("Insira uma nota entre 0 e 5.");
        }

        if (!description) {
            return alert("Digite a descrição do filme.");
        }

        if (newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        await api.post("/movie", {
            title,
            description,
            rating,
            tags
        })

        alert("Filme adicionado com sucesso!");
        navigate(-1);
    }

    return (
        <Container>
            <Header />

            <main>
                <BackButton />

                <Form>
                    <h1>Novo filme</h1>

                    <div className="inputs">
                        <Input
                            type="text"
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            type="number"
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Descrição"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <section>
                        Macadores

                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <MovieItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <MovieItem
                                isNew
                                placeholder="Nova tag"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </section>

                    <Button 
                    title="Salvar" 
                    onClick={handleNewMovie}
                    />
                </Form>
            </main>
        </Container>
    )
}