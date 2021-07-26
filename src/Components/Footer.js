import Overline from '../Typo/Overline';
import LogoMark from './LogoMark';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer className='bg-myWhite fixed bottom-0 left-0 right-0 flex justify-between items-center py-2 h-16'>
        <ul className='flex pl-20'>
          <Link
            to={{
              pathname: 'https://www.instagram.com/hamzadahmani1/',
            }}
            target='_blank'
          >
            <Overline type='li' content='Instagram' className='mr-8' />
          </Link>
          <Overline type='li' content='LinkedIn' className='mr-8' />
          <Overline type='li' content='Resume' className='mr-8' />
        </ul>
        <div className='py-3 pr-20 flex items-center justify-end'>
          <Overline type='p' content='Hamza Dahmani' />
        </div>
      </footer>
    </>
  );
}
