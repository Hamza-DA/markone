import { motion } from 'framer-motion';
export default function Error404() {
  return (
    <>
      <motion.section
        transition={{
          duration: 1,
        }}
        exit={{ opacity: 0 }}
      >
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-Displayxl font-extralight leading-none -ml-4'>
            404
          </h1>
          <p className='text-lg opacity-80 leading-9 text-center'>
            I think you lost...
            {/* Guess who can fix it 😎 */}
          </p>
        </div>
      </motion.section>
    </>
  );
}
