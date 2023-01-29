import Image from 'next/image'
import React from 'react'

interface Props {
  path: string
}

function Poster({ path }: Props) {
  return (
    <div className="px-8 py-4 flex justify-center">
      <Image src={path} alt="" width={500} height={500} />
    </div>
  )
}

export default Poster