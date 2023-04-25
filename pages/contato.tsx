import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import event2 from '../public/event2.jpg';
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from 'react';
import InputFields from '../components/Contato/inputFields';
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
        <form className=' flex flex-col justify-center text-center w-full py-10 xl:w-1/2' onSubmit={handleSubmit(onSubmit)} >
          <h1 className='text-2xl uppercase'>Entre em contato</h1>
          <InputFields
            register={register}
          />
          <div className='text-center py-6 '>
            <button className='py-4 border-2 w-56 text-white bg-black rounded-lg text-2xl font-serif' type='submit'>Enviar</button>
          </div>
          <p className='text-green-600 font-bold '>{sucessMsg}</p>
        </form>
        <Image src={event2} alt='foto de um evento de skate' className='hidden xl:flex xl:w-2/3' priority={true} />
      </main >
      <Footer />
    </>
  )
}
