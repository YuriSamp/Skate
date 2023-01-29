import React from 'react'

interface Props {
  label: string
  type: string
  id: string
  placeholder: string
  register: any
  typeOfRegister: string
}


function Input({ label, type, id, placeholder, register, typeOfRegister }: Props) {
  return (
    <div className='flex flex-col text-left'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className='border-2 border-black p-2'
        {...register(typeOfRegister)} />
    </div>
  )
}

export default Input