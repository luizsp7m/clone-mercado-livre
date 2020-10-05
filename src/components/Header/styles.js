import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--yellow-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 12px 38px;
    border-bottom: 1px solid var(--border-color);
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        > a {
            color: #555;
            font-size: 14px;
            text-decoration: none;
            padding: 0 12px;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 0;
            }

            &:hover {
                color: #222;
            }
        }
    }
`

export const Input = styled.div`
    display: flex;
    flex-direction: row;

    > input {
        width: 100%;
        height: 34px;
        border: none;
        margin-bottom: 16px;
        padding: 20px 16px;
        font-size: 14px;
        outline: 0;
        box-shadow: 0 2px 2px -1px rgba(0,0,0,.2);
        border-radius: 3px;
    }
`

export const Right= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
        display: flex;
        align-items: center;
        font-size: 17px;
        color: #555;
        cursor: pointer;
        margin-bottom: 21px;

        > img {
            height: 35px;
            margin-right: 8px;
        }
    }

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        > a {
            color: #555;
            font-size: 14px;
            text-decoration: none;
            padding: 0 12px;

            &:hover {
                color: #222;
            }
        }
    }
`
