import styled from 'styled-components'

export const ButtonGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
   padding: 1rem;
   width: 100%;
`;

export const Sentence = styled.p`
   background: ${props => props.primary ? "darkOliveGreen" : "transparent"};
   border: 1px solid gray;
   border-radius: 2rem;
   color: rgba(255, 255, 255, 0.87);
   padding: 1rem;
 `;