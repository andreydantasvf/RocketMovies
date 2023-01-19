import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content";

    > main {
        grid-area: content;
        padding: 40px 80px;
        overflow-y: auto;
    }
`;

export const Form = styled.form`
    margin-top: 24px;

    > h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
    }

    > .inputs {
        margin-top: 40px;
        display: flex;
        align-items: center;
        gap: 40px;

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    > textarea {
        width: 100%;
        height: 274px;
        margin-top: 40px;

        background-color: #262529;
        color: ${({theme}) => theme.COLORS.WHITE};

        border: none;
        resize: none;
        border-radius: 10px;
        padding: 16px;
    }

    > section {
        margin: 30px 0 20px;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-size: 20px;
        line-height: 26px;

        .tags {
            width: 100%;
            background-color: #0D0C0F;
            padding: 8px;
            border-radius: 8px;
            margin-top: 24px;

            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 24px;
        }
    }
`;