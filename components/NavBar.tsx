import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo1.jpg';

function NavBar() {
  return (
    <nav className=" items-center justify-center md:flex  md:justify-around py-4  shadow-xl">
      <div className='md:w-32'>
        <Link href='/'>
          <Image src={logo} alt='Logo da Thrasher' />
        </Link>
      </div>
      <ul className='py-2 flex gap-8 items-center justify-center lg:gap-16 text-lg sm:text-2xl'>
        <li className='text-center'>
          <Link href='/' className='lg:hover:border-b border-black '>Home</Link>
        </li>
        <li className='text-center'>
          <Link href='/carrinho' className='lg:hover:border-b border-black '>Carrinho</Link>
        </li>
        <li className='text-center'>
          <Link href='/contato' className='lg:hover:border-b border-black '>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
