import Image from 'next/image'
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-primary bg-pattern py-16'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-y-6 justify-center'>
          {/* logo */}
          <Link href='#'>
          <h1 className="text-6xl  lg:text-8xl font-bangers drop-shadow-md">KenyanKrust</h1>
          </Link>
          {/* social icons */}
          <div className='flex gap-x-6 text-xl text-white'>
            <Link href={'#'}>
              <FaYoutube />
            </Link>
            <Link href={'#'}>
              <FaFacebook />
            </Link>
            <Link href={'#'}>
              <FaInstagram />
            </Link>
            <Link href={'#'}>
              <FaPinterest />
            </Link>
          </div>
          {/* copyright */}
          <div className='text-white font-medium'>Copyright &copy; KenyanKrust 2023. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
