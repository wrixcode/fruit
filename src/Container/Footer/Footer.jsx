
import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
   <footer className='b'>
<div className="container flex justify-between items-center py-7    ">

<div className="uppercase text-2xl font-bold flex gap-2">
        <p className="text-primary">fruit</p>
        <p className="text-secondary">store</p>
        <FaLeaf className="text-green-400 text-2xl" />
      </div>
<div className='flex  text-end w-[100px] justify-between'>
  <BsInstagram href='www.whatsap.com'  className='hover:text-primary'/>
  <FaFacebook  className='hover:text-primary'/>
  <BsWhatsapp className='hover:text-primary'/>
  
  <BsTwitterX  className='hover:text-primary'/>
  
</div>
</div>

   </footer>
  )
}

export default Footer
