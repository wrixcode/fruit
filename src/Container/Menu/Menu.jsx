
import React from 'react'
import fruit1 from '../../assets/fruits/apple.png'
import fruit2 from '../../assets/fruits/orange.png'
import fruit3 from '../../assets/fruits/avocado.png'
import fruit4 from '../../assets/fruits/cherry.png'
import { motion } from 'framer-motion'
const menus=[
    {
id:1,
name:'FRESH RED APPLE',
price:'$5.99',
image:fruit1,
link:'/',
    },
    {
        id:1,
        name:'FRESH ORANGE',
        price:'$5.99',
        link:'/',
        image:fruit2,
            },
            {
                id:1,
                name:'FRESH AVACADO',
                price:'$4.99',
                link:'/',
                image:fruit3,
                    },
                    {
                        id:1,
                        name:'FRESH CHERRIES',
                        price:'$5.99',
                        link:'/',
                        image:fruit4,
                            },
]
const Menu = () => {
  return (
    <section>
        <div className='container'>
<div className='pb-20'>
    <h1 className='text-3xl font-bold'>Our menu</h1>
</div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-20 px-4 md:px-0 '>
{
    menus.map((menu)=>(
        <motion.div  className='shadow-lg rounded-3xl px-4 py-2' 
        whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
        >
            <motion.div className='w-[60px] 
            whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
            '>
                <img src={menu.image} sizes='100' alt="" />
         
                </motion.div>
                <h1 className='font-semibold '>{menu.name}</h1>
                <h1 className='text-secondary'>{menu.price}</h1>
            </motion.div>
          
    ))

}
</div>
        </div>
    </section>
  )
}

export default Menu
