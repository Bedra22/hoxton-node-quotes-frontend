import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [qoutes, setQoutes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/qoutes')
      .then(resp => resp.json())
      .then(qouteFromServer => setQoutes(qouteFromServer))
  }, [])

  return (
    <div className="App">
      <div className='qoutes'>
        <ul>
          {
            qoutes.map(item => (
              <li>
                <h3>{item.personWhoSaidTheQoute}</h3>
                <p>{item.qoute}</p>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default App
