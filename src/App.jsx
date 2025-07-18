import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Formulario } from './components/Formulario'
import { Home } from './components/Home'
import './App.css'

function App() {
  const [user, setUser] = useState(null) // Inicializado como `null`

  return (
    <Routes>
      <Route path="/" element={<Formulario setUser={setUser} />} />
      <Route
        path="/home"
        element={
          user ? ( // Verifica si `user` no es `null`
            <Home user={user} setUser={setUser} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  )
}

export default App