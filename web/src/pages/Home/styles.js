import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px 128px auto;
    grid-template-areas: "header" "newmovie" "content";
`;

export const NewMovie = styled.div`
    margin-top: 50px;
    padding: 0 80px;
    grid-area: newmovie;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        font-size: 32px;
        font-weight: 400;
        line-height: 42px;
    }

    > a {
        height: 48px;
        padding: 22px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        border: none;
        border-radius: 8px;

        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        svg {
            font-size: 24px;
        }
    }
`;

export const Content = styled.div`
    grid-area: content;
    margin-top: 40px;
    padding: 0 80px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;