import { Container } from "./styles";

import { RatingMovie } from '../RatingMovie';
import { Tag } from '../Tag';

export function Movie({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h3>{data.title}</h3>

            <RatingMovie rating={data.rating} />

            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag title={tag.name} key={tag.id} />)
                    }
                </footer>
            }
        </Container>
    )
}