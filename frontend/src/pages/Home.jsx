import React from 'react'
import Header from '../components/Header'
import SearchSection from '../components/SearchSection'
import UsersTable from '../components/UsersTable'

const Home = () => {
  return (
    <div>
      <Header />
      <SearchSection />
      <UsersTable />
    </div>
  )
}

export default Home