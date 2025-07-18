import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import './Home.css'

const LeftArrowIcon = '◀'
const RightArrowIcon = '▶'

const curriculum = {
  usuario: "Alan Xavier",
  nombreCompleto: "Alan Xavier Olivo Paredes",
  cedula: "1755620042",
  edad: 18,
  carrera: "Desarrollo de Software / Ingeniería en Sistemas",
  delitos: 0,
  lema: "Orgullosamente ladrón del Tuti",
  imagen: "/data/alan.jpg"
}

export function Home({ user, setUser }) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  const handleSelect = (option) => {
    setSelectedOption(option)
    if (option === 'logout') {
      handleLogout()
    }
  }

const renderContent = () => {
  switch (selectedOption) {
    case 'curriculum':
      return (
        <div className="curriculum">
          <img src={curriculum.imagen} alt="Foto" className="curriculum-img" />
          <h2>{curriculum.nombreCompleto}</h2>
          <p><strong>Cédula:</strong> {curriculum.cedula}</p>
          <p><strong>Edad:</strong> {curriculum.edad}</p>
          <p><strong>Carrera:</strong> {curriculum.carrera}</p>
          <p><strong>Delitos:</strong> {curriculum.delitos}</p>
          <p><strong>Lema:</strong> "{curriculum.lema}"</p>
        </div>
      )
    case 'materias':
      return (
        <div className="materias">
          <h2>Materias actuales</h2>
          <ul>
            <h5>🖥️ Diseño Web 1</h5>
            <h5>🌐 Redes e Intercomunicaciones</h5>
          </ul>
        </div>
      )
    case 'config':
      return (
        <div className="configuracion">
          <h1>⚙️ Próximamente ⚙️</h1>
        </div>
      )
    default:
      return (
  <>
    
    <h1>Bienvenido a la plataforma de la</h1>
    <h1>Universidad Central del Ecuador</h1>
    <img 
      src="/uce-simbolo.png" 
      alt="Símbolo UCE" 
      style={{ width: '120px', marginBottom: '1rem' }}
    />
    <h2>Bienvenido, {user ? user.nombre : 'Invitado'}</h2>
    <h2>¿Qué deseas hacer?</h2>
  </>
)

  }
}

  return (
    <div className="home-wrapper">
      <button 
        className="sidebar-toggle" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? LeftArrowIcon : RightArrowIcon}
      </button>

      <Sidebar onSelect={handleSelect} isOpen={sidebarOpen} />

      <div className="main-content">
        <div className="content-container">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
