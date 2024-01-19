import { motion } from 'framer-motion'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className='w-full h-screen bg-hero flex flex-col gap-10 items-center justify-center overflow-hidden snap-center scroll-smooth snap-y'>
        <motion.div 
        className='flex-col gap-5 flex items-center justify-start overflow-hidden w-[300px] md:w-[700px] h-[100px]'
        whileHover={{ scale: 1.2, opacity: 0.8, height: 300}}
        transition={{ duration: 0.6 }}
        >
        
          <motion.h1 
          className='text-white font-extrabold text-5xl flex flex-col items-center justify-center text-center select-none'
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          >
            R  E  G  U  I  G <br /> <span className='font-thin'>I     L     I     A     S</span>
          </motion.h1>
            
        
        <Link href="https://github.com/iliasreg" target="_blank">
          <div className='bg-stone-100 w-[200px] md:w-[600px] h-[40px] flex justify-center items-center rounded-xl text-stone-900 links-hover'>
            <h3 className='font-light text-lg'>G I T H U B</h3>
          </div>
        </Link>
        <Link href="https://www.youtube.com/@bluuuw" target="_blank">
          <div className='bg-stone-100 w-[200px] md:w-[600px] h-[40px] flex justify-center items-center rounded-xl text-stone-900 links-hover'>
            <h3 className='font-light text-lg'>Y O U T U B E</h3>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/reguig-ilias" target="_blank">
          <div className='bg-stone-100 w-[200px] md:w-[600px] h-[40px] flex justify-center items-center rounded-xl links-hover text-stone-900'>
            <h3 className='font-light text-lg'>L I N K E D I N</h3>
          </div>
        </Link>
        </motion.div>
      </section>
  )
}

export default Hero