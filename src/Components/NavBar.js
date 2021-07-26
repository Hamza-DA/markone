import { NavLink } from 'react-router-dom';
import LogoMark from './LogoMark';
import Typo from '../Typo/Typo.json';
import { motion } from 'framer-motion';
export default function NavBar() {
  const arrayOfPaths = [
    { path: '/home', title: 'Home' },
    { path: '/about-me', title: 'About me' },
    { path: '/portfolio', title: 'Portfolio' },
    { path: '/contact-me', title: 'Contact me' },
  ];
  return (
    <>
      <nav className='bg-myWhite absolute top-0 left-0 right-0 flex justify-between items-center py-2 h-16 z-10'>
        <div className=' relative py-3 pl-20 pr-3'>
          <LogoMark fill='#F9F9FB' display={true} />
          <motion.div
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.4,
            }}
            initial={{
              width: 0,
            }}
            animate={{
              width: 'auto',
            }}
            className='bg-myRed absolute top-0 bottom-0 left-0 right-0'
          ></motion.div>
          <motion.div
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.5,
            }}
            initial={{
              width: 0,
            }}
            animate={{
              width: 'auto',
            }}
            className='bg-myBlack absolute top-0 bottom-0 left-0 right-0'
          ></motion.div>
        </div>

        <ul className='flex pr-20'>
          {arrayOfPaths.map((e, index) => {
            return (
              <NavLink
                key={index}
                activeClassName='text-myRed'
                to={e.path}
                className={`uppercase text-xs font-semibold tracking-px3 ml-10`}
              >
                <motion.div
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1.5 + index / 12,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  {e.title}
                </motion.div>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
