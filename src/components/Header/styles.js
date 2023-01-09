import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from '../Input';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    padding: 0 80px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    width: 350px;

    display: flex;
    align-items: center;
    gap: 9px;

    > div {
        display: flex;
        flex-direction: column;
        line-height: 24px;

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        span {
            font-size: 14px;
            text-align: right;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > ${Link} img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;