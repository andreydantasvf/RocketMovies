import { Container, Form } from "./styles";

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { MovieItem } from '../../components/MovieItem';

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <BackButton />

                <Form>
                    <h1>Novo filme</h1>

                    <div className="inputs">
                        <Input type="text" placeholder="Título" />
                        <Input type="number" placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    <textarea name="description" id="description" placeholder="Descrição"></textarea>

                    <section>
                        Macadores

                        <div className="tags">
                            <MovieItem value="React" />
                            <MovieItem isNew placeholder="Novo marcador" />
                        </div>
                    </section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}