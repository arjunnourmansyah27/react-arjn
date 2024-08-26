import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function nextPage(){
    setCount(count + 1)
  }

  function resetCount () {
    setCount(0)
  }

  return (
    <>
    <main>
      <header>
        <p id='count'>{count}</p>
      </header>

      <button onClick={nextPage}>Klik disini</button>
      <button id='reset' onClick={resetCount}>Reset</button>
      <article>
        <h3>Kamu me-klik sebanyak : {count}</h3>
        <p id='star'>yeay⭐</p>
      </article>
    </main>
    </>
  )
}

export default App
