import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  Nome : string
  Path : string
}

function ShapeHome( {Nome, Path} : Props) {
  return (
    <li className=" shadow-lg w-80 border-[1px] border-black bg-white rounded-lg">
      <h2 className="p-4 font-bold text-center">{Nome}</h2>
      <Image src={Path} className="p-1" alt='foto de um shape' width={300} height={300}/>
      <Link href='/' className="flex justify-center py-4 gap-2 cursor-pointer items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cart"
            viewBox="0 0 16 16">
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <p className="text-lg">Comprar</p>
        </Link >
    </li>
  )
}

export default ShapeHome