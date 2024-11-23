// src/components/Layout.js

import React from 'react'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Optionally, add a Footer component here */}
    </>
  )
}

export default Layout
