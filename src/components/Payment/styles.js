import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--border-color);
`;

export const Title = styled.div`
    font-size: 18px;
    color: var(--black-75-color);
    margin-bottom: 20px;
`

export const Button = styled.div`
    height: 44px;
    display: flex;
    justify-content: flex-start;
    background-color: var(--green-color);
    color: #fff;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 20px;

    > img {
        height: 20px;
        margin: 0 20px;
        color: #fff;
    }
`

export const Methods = styled.div`
    > a {
        color: var(--blue-color);
        text-decoration: none;
        font-size: 14px;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        > span {
            color: var(--black-75-color);
        }

        .options {
            display: flex;
            flex-direction: row;

            > img {
                height: 30px;
                margin-right: 12px;
            }
        }
    }
`
