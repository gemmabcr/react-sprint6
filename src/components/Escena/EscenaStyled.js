import styled from 'styled-components'

export const Box = styled.main`
 background-image: url(${ props => props.imatge });
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 height: 100vh;
 width: 100vw;
`;

export const ButtonGroup = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 1rem;
 padding: 1rem;
`;

export const Sentence = styled.p`
 background: ${ props => props.primary ? 'darkOliveGreen' : '#282c34' };
 border: 1px solid gray;
 border-radius: 2rem;
 color: rgba(255, 255, 255, 0.87);
 padding: 1rem;
`;