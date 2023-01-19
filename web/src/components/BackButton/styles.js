import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;

        display: flex;
        align-items: center;
        gap: 8px;
    }

    > svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;