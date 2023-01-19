import { Rating } from '@mui/material';
import { Container } from "./styles";

export function RatingMovie({ rating }) {
    return (
        <Container>
            <Rating
                name="rating-movie"
                value={rating}
                precision={0.5}
                readOnly
            />
        </Container>
    )
}