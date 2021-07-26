import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CoT({ content, link }) {
  return (
    <Link
      to={link}
      className='text-myBlack uppercase text-xs font-semibold tracking-px3 flex items-center'
    >
      <span className='mr-3'>{content}</span>

      <motion.svg
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        initial={{ width: '0px' }}
        animate={{ width: 'auto' }}
        width='106'
        height='2'
        viewBox='0 0 106 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0.5 1H105.5' stroke='#FD5052' stroke-width='1.5' />
      </motion.svg>
    </Link>
  );
}
