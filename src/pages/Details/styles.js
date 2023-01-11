import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 123px;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;
    margin-bottom: 36px;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    > button {
        border: none;
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 10px;
        padding: 8px 16px;
    }
`;

export const Information = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;

    > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
`;

export const Date = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;

    > span {
        padding: 8px 16px;
    }
`;

export const Description = styled.div`
    font-size: 16px;
    line-height: 21px;
    text-align: justify;
`;