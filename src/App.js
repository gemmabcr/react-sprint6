import React from 'react'
import './App.css'
import data from './data.js'
import Escena from './components/Escena/Escena'

function App() {
  const [visibleEscena, setVisibleEscena] = React.useState(false)

  const title = 'S6. Intro React'
  const subtitle = 'Això és un tutorial en el qual mitjançant dos botons podràs avançar i retrocedir en els consells.'
  const buttonText = 'Començar'

  function showEscena() { setVisibleEscena(prevState => !prevState) }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {!visibleEscena && <button onClick={showEscena}>{buttonText}</button>}
        {visibleEscena && <Escena sentences={data} />}
      </header>
    </div>
  )
}

export default App
