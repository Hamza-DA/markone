import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import pic from '../Components/pic.png';
export default function AboutMe() {
  return (
    <>
      <motion.div
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        initial={{
          opacity: 0,
          scale: 0.95,
          rotateX: '-2deg',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: '0deg',
          transformStyle: 'preserve-3d',
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          rotateX: '2deg',
          transformStyle: 'preserve-3d',
        }}
        className='h-full flex items-start relative px-20 overflow-y-auto'
      >
        <div className='flex-col w-1/2'>
          <h3 className='text-Display3 font-extralight leading-none -ml-3 mb-4'>
            Hamza
            <br />
            Dahmani
          </h3>
          <p className='text-lg opacity-80 leading-9 mb-8 tracking-wide'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            eligendi quaerat, delectus laborum nobis quasi, accusamus iste
            maxime pariatur nisi ipsam blanditiis! Facere odio obcaecati officia
            repudiandae sit ipsum hic atque pariatur veniam doloremque nulla
            quidem, ipsa deleniti rerum veritatis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi, eligendi quaerat, delectus
            laborum nobis quasi, accusamus iste maxime pariatur nisi ipsam
            blanditiis! Facere odio obcaecati officia repudiandae sit ipsum hic
            atque pariatur veniam doloremque nulla quidem, ipsa deleniti rerum
            veritatis.
          </p>
        </div>
        <div className='absolute top-0 right-0 h-full w-1/2'>
          <motion.div
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.4,
            }}
            initial={{
              width: 0,
            }}
            animate={{
              width: '100%',
            }}
            className='bg-myRed absolute top-0 bottom-0 right-0'
          ></motion.div>
          <motion.img
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.5,
            }}
            initial={{
              width: 0,
            }}
            animate={{
              width: '100%',
            }}
            src={pic}
            className='bg-myBlack absolute top-0 bottom-0 right-0 object-cover h-full'
          />
        </div>
      </motion.div>
    </>
  );
}
