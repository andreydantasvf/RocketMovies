import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 22px;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h3 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 8px;
    }

    > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin: 15px 0;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;