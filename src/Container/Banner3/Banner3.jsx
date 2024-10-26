import React from 'react'
import image1 from '../../assets/banner-bg.jpg'
import { motion } from 'framer-motion'
const Banner3 = () => {
    const bgstyle={
backroundImage:`url(${image1})`,
backgroundposition:'center',
backgroundSize:'cover',
backgroundRepeat:'no-repeat',

    }
  return (
    <section className='bg-secondary/10' >
        
       
        <div 
       
    style={bgstyle}
        className='container   space-y-6 md:space-y-0 px-20  py-10 grid
         grid-cols-1 md:grid-cols-2 gap-8'>
           
{/* image section */}


<div className='flex justify-center items-center'>
    <img src={image1} 
    className='w-full h-full object-cover rounded-2xl'
    alt="" />
</div>
{/* contentsection */}
<div className='flex flex-col justify-center'>


<div className='text-center'>
<h1 className='text-6xl  font-bold pb-9 '> GET FRESH FRUIT TODAY</h1>

<p className='text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, aut culpa repellendus 
    qatque enim magni autem illum veritatis commodi quaerat offic

    iis! Nemo animi sunt aut quasi quis laudantium deserunt. Voluptas.
    
    </p>
   
</div>
    <div className='text-center pt-7'>
    <button className='btn-primary'>Order Now</button>
    </div>
</div>


        </div>
    </section>
  )
}

export default Banner3
