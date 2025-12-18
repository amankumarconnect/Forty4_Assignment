import React from 'react'
import Navbar from './components/navbar.jsx'
import Header from './components/Header.jsx'
import CardSection from './components/CardSection.jsx'

const App = () => {
  return (
    <div className='bg-accent-950'>
      <Navbar />
      <Header />
      <CardSection/>
    </div>
  )
}

export default App