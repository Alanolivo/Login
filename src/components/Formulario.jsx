import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import './Formulario.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import credenciales from '../data/formulario.json'

export function Formulario({ setUser }) {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [error, setError] = useState('')
  const [capVal, setCapVal] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!usuario || !contraseña) {
      setError('Todos los campos son obligatorios')
      return
    }

    const usuarioValido = credenciales.find(
      (u) => u.usuario === usuario && u.contraseña === contraseña
    )

    if (!usuarioValido) {
      setError('Usuario o contraseña incorrectos')
      return
    }

    if (!capVal) {
      setError('Completa el reCAPTCHA para continuar')
      return
    }

    setError('')
    setUser({ nombre: usuarioValido.usuario })
    navigate('/home')
  }

  return (
    <section className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <img
          src="/uce-simbolo.png"
          alt="Logo UCE"
          className="mx-auto mb-3"
          style={{ width: '100px' }}
        />
        <h2 className="text-center mb-3">Inicia Sesión en la UCE</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input
            type="text"
            className="form-control"
            value={usuario}
            placeholder="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            value={contraseña}
            placeholder="Contraseña"
            onChange={(e) => setContraseña(e.target.value)}
          />
          {error && <div className="text-danger text-center">{error}</div>}
          <ReCAPTCHA
            sitekey="6LcIzIUrAAAAAMcdYy8pWVXuRwlkfWzPoSKND8fl"
            onChange={(value) => setCapVal(value)}
          />
          <button disabled={!capVal} className="btn btn-primary" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </section>
  )
}
