import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import event2 from '../public/event2.jpg';
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from 'react';

interface IContact {
  firstname: string,
  lastName: string,
  email: string,
  phone: string,
  mensage: string,
}

export default function Contato() {
  const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm<IContact>();
  const onSubmit: SubmitHandler<IContact> = data => console.log(data);
  const [sucessMsg, setSucessMsg] = useState('');


  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setSucessMsg('Sua mensagem foi enviada, fique de olho no seu email')
      reset({ firstname: '', lastName: '', email: '', phone: '', mensage: '' })
    }
    setTimeout(() => {
      setSucessMsg('')
    }, 5000);
  }, [formState.isSubmitSuccessful, reset])

  return (
    <>
      <Head>
        <title>Thrasher</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='flex py-14 lg:py-0  '>
        <form className=' flex flex-col justify-center text-center w-full py-10 lg:w-1/2' onSubmit={handleSubmit(onSubmit)} >
          <h1 className='text-2xl uppercase'>Entre em contato</h1>
          <section>
            <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 py-5 px-3 md:px-0'>
              <div className='flex flex-col text-left'>
                <label htmlFor='name'>Nome</label>
                <input
                  type='text'
                  placeholder='Yuri'
                  id='name'
                  className='border-2 border-black p-2'
                  {...register('firstname')} />
              </div>
              <div className='flex flex-col text-left'>
                <label htmlFor='lastName'>Sobrenome</label>
                <input
                  placeholder='Sampaio'
                  id='lastName'
                  className='border-2 border-black p-2'
                  {...register('lastName')} />
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 py-5 px-3 md:px-0'>
              <div className='flex flex-col text-left' >
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  placeholder='exemplo@gmail.com'
                  id='email'
                  className='border-2 border-black p-2'
                  {...register('email')} />
              </div>
              <div className='flex flex-col text-left'>
                <label htmlFor='telefone'>Telefone</label>
                <input
                  type='tel'
                  placeholder='(21)9****-****'
                  id='telefone'
                  className='border-2 border-black p-2'
                  {...register('phone')} />
              </div>
            </div>
            <div className='flex flex-col py-5 text-left items-center'>
              <h3 className='w-96 md:w-[29.5rem]'>Sua mensagem</h3>
              <textarea className='border-2 border-black p-2 w-96 md:w-[29.5rem] resize-none h-24' placeholder='Tente ser breve e conciso' {...register('mensage')} />
            </div>
          </section>
          <div className='text-center py-6 '>
            <button className='py-4 border-2 w-56 text-white bg-black rounded-lg text-2xl font-serif' type='submit'>Enviar</button>
          </div>
          <p className='text-green-600 font-bold '>{sucessMsg}</p>
        </form>
        <Image src={event2} alt='foto de um evento de skate' className='hidden lg:flex lg:w-2/3' />
      </main >
      <Footer />
    </>
  )
}