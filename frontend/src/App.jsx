import React from 'react'
import Navbar from './components/navbar.jsx'
import Header from './components/Header.jsx'
import CardSection from './components/CardSection.jsx'
import SearchSection from './components/SearchSection.jsx'

const App = () => {
  return (
    <div className='bg-accent-950'>
      <Navbar />
      <Header />
      <CardSection/>
      <SearchSection/>
    </div>
  )
}

export default App