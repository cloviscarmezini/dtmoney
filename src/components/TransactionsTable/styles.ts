import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }

    button {
        width: 100%;
        padding: 0.2rem 0;
        background: var(--red);
        color: #fff;
        border-radius: 0.25rem;
        border:0;
        font-size: 1rem;
        transition: filter 0.2s;
        font-weight: 600;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

