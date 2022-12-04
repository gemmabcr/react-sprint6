import React from 'react'
import { ButtonGroup, Sentence } from './EscenaStyled'

const Escena = ({ sentences, isSelected, previousSentence, nextSentence }) => {
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