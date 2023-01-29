import React from 'react'
import Input from './input'

function InputFields({ register }: any) {
  return (
    <section>
      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 py-5 px-3 md:px-0'>
        <Input
          label='Nome'
          type='text'
          placeholder='Yuri'
          id='name'
          register={register}
          typeOfRegister={'firstname'}
        />
        <Input
          label='Sobrenome'
          type='text'
          placeholder='Sampaio'
          id='lastName'
          register={register}
          typeOfRegister={'lastName'}
        />
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 py-5 px-3 md:px-0'>
        <Input
          label='Email'
          type='email'
          placeholder='exemplo@gmail.com'
          id='email'
          register={register}
          typeOfRegister={'email'}
        />
        <Input
          label='Telefone'
          type='tel'
          placeholder='(21)9****-****'
          id='tel'
          register={register}
          typeOfRegister={'phone'}
        />
      </div>
      <div className='flex flex-col py-5 text-left items-center'>
        <h3 className='w-96 md:w-[29.5rem]'>Sua mensagem</h3>
        <textarea className='border-2 border-black p-2 w-96 md:w-[29.5rem] resize-none h-24' placeholder='Tente ser breve e conciso' {...register('mensage')} />
      </div>
    </section>
  )
}

export default InputFields