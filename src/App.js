import React from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Writing from './components/Writing/Writing'
import Teaching from './components/Teaching/Teaching'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Writing />
      <Teaching />
      <Contact />
      <Footer />
    </>
  )
}
