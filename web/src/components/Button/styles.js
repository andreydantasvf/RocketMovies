import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: none;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;