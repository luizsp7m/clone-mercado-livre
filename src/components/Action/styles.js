import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--border-color);
`;

export const Row = styled.div`
    font-size: 13px;
    color: var(--gray-color);
    margin-bottom: 16px;

    > span:nth-child(1) {
        border-right: 1px solid var(--gray-color);
        padding-right: 10px;
        margin-right: 10px;
    }
`

export const Title = styled.div`
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
        font-weight: 400;
        font-size: 26px;
        color: #222;
    }

    > img {
        height: 24px;
        cursor: pointer;
    }
`

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    > h3 {
        font-size: 30px;
        font-weight: 400;
        color: #222;
        margin-bottom: 8px;
    }

    > span {
        color: var(--green-color);
        margin-bottom: 8px;
    }

    > a {
        color: var(--blue-color);
        text-decoration: none;
        font-size: 14px;
    }
`

export const Delivery = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    > h5 {
        background-color: #D9E7FA;
        display: flex;
        padding: 6px 10px;
        color: var(--blue-color);
        margin-bottom: 16px;
        font-weight: 450;
        width: 158px;
    }

    > span {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--green-color);
        margin-bottom: 12px;

        > img {
            height: 30px;
            margin-right: 12px;
        }
    }

    > a {
        color: var(--blue-color);
        text-decoration: none;
        font-size: 14px;
    }
`

export const Stock = styled.div`
    margin-bottom: 16px;

    > h5 {
        font-size: 16px;
        font-weight: 500;
        color: #444;
    }
`

export const Buy = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;

    button {
        height: 48px;
        border-radius: 3px;
        border: none;
        background-color: #2968C8;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: 0;
    }

    .cart {
        margin-top: 8px;
        background-color: #D9E7FA;
        color: #2968C8;
    }
`

export const Warranty= styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    > span {
        display: flex;
        flex-direction: row;
        font-size: 13px;
        color: #aaa;

        b {
            color: var(--blue-color);
            font-weight: normal;
            cursor: pointer;
        }

        &:first-child {
            margin-bottom: 12px;
        }
        
        > img {
            height: 15px;
            margin-right: 12px;
        }
    }
`