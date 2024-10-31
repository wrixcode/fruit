import React from 'react'
import image2 from '../../assets/fruit-plate2.png'
const Banner2 = () => {
  return (
    <section className=''>
    <div className='container  space-y-6 md:space-y-0 px-16 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2'>


{/* contentsection */}
<div className='flex flex-col justify-center'>


<div className='text-center'>
<h1 className='text-6xl  font-bold pt-7 pb-9 capitalize '>ONLINE FRUIT STORE</h1>

<p className='text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, aut culpa repellendus 
qatque enim magni autem illum veritatis commodi quaerat offic

iis! Nemo animi sunt aut quasi quis laudantium deserunt. Voluptas.

</p>
<p className='mt-5'>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolorum 
  assumenda vitae culpa ut doloribus
   repellendus esse! Reprehenderit, tempore ullam?
</p>
</div>
<div className='text-center pt-7'>
<button className='btn-primary'>Download the app</button>
</div>
</div>
{/* image section */}


<div className='flex justify-center items-center'>
<img src={image2} 
className='w-[300px] h-full object-cover'
alt="" />
</div>

    </div>
</section>
  )
}

export default Banner2
