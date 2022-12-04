import React from 'react'
import { Button } from './EscenaStyled'

const Escena = ({ sentences }) => {
  return (
    <div>
      { sentences.map(sentence =>
        <Button>{sentence}</Button>
      ) }
    </div>
  )
}

export default Escena