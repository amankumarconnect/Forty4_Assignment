import React from 'react'
import Card from './Card.jsx'
import { IoFlashSharp } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { FaUserPlus } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

const CardSection = () => {
  return (
    <div className='p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <Card cardTitle={"Total Users"} cardImage={<HiMiniUsers />} cardData={"1248"} cardChange={12} />
          <Card cardTitle={"Active Users"} cardImage={<IoFlashSharp />} cardData={"856"} cardChange={5} />
          <Card cardTitle={"New Users"} cardImage={<FaUserPlus />} cardData={"42"} cardChange={0} />
          <Card cardTitle={"Inactive Users"} cardImage={<MdFlight />} cardData={"12"} cardChange={-2} />
        </div>
    </div>
  )
}

export default CardSection