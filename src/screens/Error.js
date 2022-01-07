import React from 'react'
import '../components/styles/Error.css'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className="error">
      <div className="message"><span>Erreur</span></div>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      <NavLink to="/">
        <div className="backtohome"><span>Retour à la page d'accueil</span></div>
      </NavLink>
    </div>
  )
}