import React from 'react'
import Card from './Card.jsx'

const CardSection = () => {
  return (
    <div className='p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <Card cardTitle={"Total Users"} cardImage={"users.png"} cardData={"1248"} cardChange={12} />
          <Card cardTitle={"Active Users"} cardImage={"flash.png"} cardData={"1024"} cardChange={5} />
          <Card cardTitle={"New Users"} cardImage={"newuser.png"} cardData={"224"} cardChange={0} />
          <Card cardTitle={"Inactive Users"} cardImage={"inactive.png"} cardData={"24"} cardChange={-2} />
        </div>
    </div>
  )
}

export default CardSection