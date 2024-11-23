// src/components/Header.js
import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Lux IT Solutions</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
