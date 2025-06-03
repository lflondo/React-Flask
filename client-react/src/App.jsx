import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    // Fetch data from the Flask backend
    fetch('http://127.0.0.1:5000/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.user);
      })
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Flask</h1>
      <div className="card">
        <h2>Users from Flask Backend:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
