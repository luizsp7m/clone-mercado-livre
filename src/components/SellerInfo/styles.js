import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    border-bottom: 1px solid var(--border-color);

    > a {
        color: var(--blue-color);
        text-decoration: none;
        font-size: 14px;
    }
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;
    color: var(--black-75-color);
`

export const Shop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;

    > img {
        height: 25px;
        margin-right: 20px;
    }

    > div {
        display: flex;
        flex-direction: column;

        > h5 {
            font-size: 12px;
            font-weight: 400;
        }

        > span {
            font-size: 14px;
            font-weight: 300;
            color: #a0a0a0
        }
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 32px;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        &:nth-child(2) {
            padding: 0 10px;
            margin: 0 20px;
            border-right: 1px solid var(--border-color);
            border-left: 1px solid var(--border-color);
        }

        > h3 {
            font-weight: 500;
            height: 20px;
        }

        img {
            height: 20px;
        }

        span {
            font-size: 11px;
            text-align: center;
            margin-top: 10px;
            color: var(--black-75-color);
        }
    }
`

export const Thermometer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    align-items: center;

    > div {
        height: 7px;
        width: 100%;
        background-color: red;
        margin: 0 5px;

        &:nth-child(1) {
            background-color: #FFF0F0;
        }

        &:nth-child(2) {
            background-color: #FFF5E8;
        }

        &:nth-child(3) {
            background-color: #FFFCDA;
        }

        &:nth-child(4) {
            background-color: #F1FDD7;
        }

        &:nth-child(5) {
            height: 10px;
            background-color: #39B54A;
        }
    }
`
