import Neurals from '../Components/Neurals';
import { motion, AnimatePresence } from 'framer-motion';
import CoT from '../Components/CoT';
export default function Home() {
  return (
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
      className=' px-20 h-full flex items-center relative'
    >
      <div className='flex-col'>
        <h1 className='text-Display1 font-extralight leading-none -ml-4 mb-4'>
          Front end
          <br />
          Developer
        </h1>
        <p className='text-lg opacity-80 leading-9 mb-8 tracking-wide'>
          Hi, my name is Hamza Dahmani, I am a self taught <br />
          front-end developer looking for my next opportunity !
        </p>
        <CoT content='Contact me' link='/contact-me' />
      </div>
      <Neurals />
    </motion.div>
  );
}
