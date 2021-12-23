import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    // 1rem equivale 16px do tamanho da fonte definida na tag html
    padding: 2rem 1rem 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`