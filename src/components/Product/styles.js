import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 0;

    a {
        text-decoration: none;
        color: var(--blue-color);
        font-size: 14px;

        &:first-child {
            padding-right: 12px;
            border-right: 1px solid var(--border-color);
            margin-right: 12px;
        }
    }
`;

export const Panel = styled.div`
    background-color: var(--white-color);
    box-shadow: var(--border-color);
    display: grid;
    grid-template-columns: 65fr 35fr;
`

export const Column = styled.div`
    &:first-child {
        border-right: 1px solid var(--border-color);
    }
`

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 530px;

    > img {
        height: 50%;
    }
`

export const Section = styled.div`
    border-bottom: 1px solid var(--border-color);
    padding: 40px 32px;

    display: flex;
    flex-direction: column;

    > h4 {
        font-weight: 400;
        color: var(--black-75-color);
        font-size: 18px;
        margin-bottom: 35px;
    }

    > div {
        display: flex;
        flex-direction: column;

        > span + span {
            margin-top: 16px;
        }
    }

    .title {
        font-size: 16px;
        margin-bottom: 8px;
        color: var(--black-75-color);
    }

    .description {
        margin-top: 5px;
        font-size: 14px;
        color: var(--gray-color);
    }

    > a {
        color: var(--blue-color);
        text-decoration: none;
        font-size: 14px;
        margin-top: 16px;
    }
`

export const Description = styled.div`
    border-top: 1px solid var(--border-color);
    padding: 44px 32px;

    > h2 {
        margin-bottom: 24px;
        font-size: 22px;
    }

    > p {
        color: var(--gray-color);
        font-size: 20px;
        line-height: 27px;
    }
`
