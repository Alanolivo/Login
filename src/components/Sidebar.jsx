import React from 'react'
import './Sidebar.css'

export function Sidebar({ onSelect, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul>
        <li onClick={() => onSelect('inicio')}>🏠 Inicio</li>
        <li onClick={() => onSelect('curriculum')}>📄 Curriculum</li>
        <li onClick={() => onSelect('materias')}>📚 Materias</li>
        <li onClick={() => onSelect('config')}>⚙️ Configuración</li>
        <li onClick={() => onSelect('logout')}>🚪 Cerrar sesión</li>
      </ul>
    </aside>
  )
}