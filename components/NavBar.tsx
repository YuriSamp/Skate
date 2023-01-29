import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logo1.jpg';

function NavBar() {
  return (
    <nav className=" items-center justify-center md:flex  md:justify-around py-4  shadow-xl">
      <div className='md:w-32'>
        <Link href='/'>
          <Image src={logo} alt='Logo da Thrasher' />
        </Link>
      </div>
      <ul className='py-2 flex gap-8 items-center justify-center lg:gap-16'>
        <li className='text-center'>
          <Link href='/' className='text-2xl lg:hover:border-b-2 border-black '>Home</Link>
        </li>
        <li className='text-center'>
          <Link href='/carrinho' className='text-2xl lg:hover:border-b-2 border-black '>Carrinho</Link>
        </li>
        <li className='text-center'>
          <Link href='/contato' className='text-2xl lg:hover:border-b-2 border-black '>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar