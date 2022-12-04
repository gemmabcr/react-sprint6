import React from 'react'

const Escena = ({sentences}) => {
  return (
    <div>
      {sentences.map(sentence => <p>{sentence}</p>)}
    </div>
  )
}

export default Escena