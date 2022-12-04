import React from 'react'
import './App.css'
import data from './data.js';
import Escena from './components/Escena/Escena'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Escena sentences={data} />
      </header>
    </div>
  )
}

export default App
