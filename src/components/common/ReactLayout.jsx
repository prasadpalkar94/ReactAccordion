import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function ReactLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
