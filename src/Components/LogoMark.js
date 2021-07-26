import { motion } from 'framer-motion';

export default function LogoMark({ fill, display }) {
  let myColor = fill && fill;
  const LogoMarkArray = [
    'M13.4631 26.174H0.302063L15.4141 0H28.5751L13.4631 26.174Z',
    'M37.743 12.201L29.675 26.174H16.514L24.582 12.201H37.743Z',
    'M45.889 26.174H32.7271L47.8391 0H61L45.889 26.174Z',
  ];
  return (
    <>
      <motion.svg
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: 1,
        }}
        className={`z-10 relative transform ${
          display === true ? 'scale-100' : 'scale-40 -mx-4'
        }`}
        width='61'
        height='27'
        viewBox='0 0 61 27'
        // fill={fill}
        xmlns='http://www.w3.org/2000/svg'
      >
        {LogoMarkArray.map((e, index) => {
          return (
            <motion.path
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 1 + index / 12,
              }}
              initial={{
                pathLength: 0,
                fill: '#0000',
              }}
              animate={{
                pathLength: 1,
                fill: myColor,
              }}
              d={e}
            />
          );
        })}

      </motion.svg>
    </>
  );
}
