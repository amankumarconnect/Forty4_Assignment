import { useState } from 'react'
import Header from '../components/Header'
import SearchSection from '../components/SearchSection'
import UsersTable from '../components/UsersTable'

const Home = () => {
  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <div>
      <Header />
      <SearchSection />
      <UsersTable />
    </div>
  )
}

export default Home