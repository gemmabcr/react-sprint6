import React from 'react'
import { ButtonGroup, Sentence } from './EscenaStyled'

const Escena = ({ sentences }) => {
  const [isSelected, setIsSelected] = React.useState(0);

  function previousSentence() {
    setIsSelected(prevState =>
      prevState = (isSelected > 0) ? --prevState : sentences.length - 1
    );
  }

  function nextSentence() {
    setIsSelected(prevState =>
      prevState = (isSelected < sentences.length-1) ? ++prevState : 0
    );
  }

  return (
    <div>
      <ButtonGroup>
        <button onClick={previousSentence}>Anterior</button>
        <button onClick={nextSentence}>Següent</button>
      </ButtonGroup>
      {sentences.map(sentence => {
        let index = sentences.indexOf(sentence);
        return (
          <Sentence
            key={sentence}
            primary={index === isSelected}
          >
            {sentence}
          </Sentence>
        )
      })}
    </div>
  )
}

export default Escena