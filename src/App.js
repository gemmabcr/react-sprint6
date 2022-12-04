import React from 'react'
import './App.css'
import data from './data.js'
import Escena from './components/Escena/Escena'
import { Box } from './components/Escena/EscenaStyled'

function App() {
  const [visibleEscena, setVisibleEscena] = React.useState(false)
  const [isSelected, setIsSelected] = React.useState(0)

  const sentences = data.map(item => item.txt)
  const images = data.map(item => item.img)
  const title = 'S6. Intro React'
  const subtitle = 'Això és un tutorial en el qual mitjançant dos botons podràs avançar i retrocedir en els consells.'
  const buttonText = 'Començar'

  function showEscena() {
    setVisibleEscena(prevState => !prevState)
  }
  function previousSentence() {
    setIsSelected(prevState =>
      prevState = (isSelected > 0) ? --prevState : sentences.length - 1
    )
  }
  function nextSentence() {
    setIsSelected(prevState =>
      prevState = (isSelected < sentences.length-1) ? ++prevState : 0
    )
  }

  return (
    <Box imatge={ images[isSelected] }>
      <header>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      { !visibleEscena &&
        <button onClick={ showEscena }>
          { buttonText }
        </button>
      }
      { visibleEscena &&
        <Escena
          sentences={ sentences }
          isSelected={ isSelected }
          previousSentence={ previousSentence }
          nextSentence={ nextSentence }
        />
      }
    </Box>
  )
}

export default App
