import Head from 'next/head'
import { useRecoilState } from 'recoil'
import NavBar from '../components/NavBar'
import { ListaDeCompras } from '../utils/atom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image'
import { FormataBRL } from '../utils/FormataBRL'
import Footer from '../components/Footer'
import { Checkbox } from "@material-tailwind/react";
import React, { useState, useEffect } from 'react'
import { IShapes } from '../interfaces/Shape'
import { ProductPrice } from '../utils/PriceReduce'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Carrinho() {

  const [lista, setLista] = useRecoilState<IShapes[]>(ListaDeCompras)
  const [CartItems, setCartItems] = useState<IShapes[]>([])

  const notify = () => toast.success("Esse era o meu aplicativo, espero que tenha gostado");

  useEffect(() => {
    const ListaTradada = lista.map(item => {
      const newObject = {
        ...item,
        Selecionado: true,
        Presente: false
      }
      return newObject
    })
    setCartItems(ListaTradada)
  }, [lista])

  const { finalPrice, SelectedItems } = ProductPrice(CartItems)

  function BooleanChange(id: string, Propriedade: boolean) {
    const ListaVerificada = CartItems?.map(item => {
      if (item.Id === id) {
        Propriedade = !Propriedade
      }
      return item
    })
    setCartItems(ListaVerificada);
  }

  function handleRemove(id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    const ListaVerificada = CartItems?.filter(item => item.Id !== id)
    setLista(ListaVerificada);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setLista([])
    notify()
  }

  return (
    <>
      <Head>
        <title>Thrasher</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <ToastContainer />
        <form className='m-auto md:w-[47rem] lg:w-[64rem] xl:w-[72rem] pt-16 pb-24  ' >
          <div className='flex items-center gap-4 py-4 pl-10'>
            <AiOutlineShoppingCart className='w-7 h-7' />
            <h1 className='text-2xl uppercase'>Carrinho</h1>
          </div>
          <div className='flex flex-col border-b-2'>
            {CartItems?.map((item, index) => (
              <section key={index} className='flex flex-col sm:flex-row items-center py-4 gap-20'>
                <div className='flex'>
                  <div className='flex items-center px-4'>
                    <Checkbox defaultChecked onChange={() => item.Selecionado && BooleanChange(item.Id, item.Selecionado)} />
                  </div>
                  <Image src={item.Image} alt='foto do produto' width={200} height={200} className='border-[1px] border-black w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:h-[300px] lg:w-[300px]' />
                </div>
                <div className='flex flex-col items-center sm:items-start px-4 w-full gap-6'>
                  <div className='flex flex-col lg:flex-row items-baseline justify-between'>
                    <h3 className='md:text-lg lg:text-2xl'>{item.Name}</h3>
                    <p className='md:text-lg lg:text-xl'>Unidade: <strong>{FormataBRL(item.Price)}</strong></p>
                  </div>
                  <p className='text-xl text-green-700'>Em estoque</p>
                  <div className='flex flex-row gap-2 lg:gap-6'>
                    <p>Quantidade : {item.Quantity}</p>
                    <p>Tamanho : {item.Size}</p>
                  </div>
                  <div className='space-x-1 flex items-center'>
                    <Checkbox id={item.Id} onChange={() => item.Presente && BooleanChange(item.Id, item.Presente)} />
                    <label htmlFor={item.Id} className='select-none' >Este pedido é para presente</label>
                  </div>
                  <button className='text-center border-2 w-20 bg-red-400 rounded-xl' onClick={(e) => handleRemove(item.Id, e)}>Excluir</button>
                </div>
              </section>
            ))}
          </div>
          <div className='w-full flex justify-between py-2 px-4 gap-10 sm:gap-0 items-center'>
            <button className='sm:text-2xl border-2 p-4 rounded-3xl bg-black text-gray-100 font-serif' onClick={(e) => handleSubmit(e)}>Fechar pedido</button>
            {finalPrice ?
              <h2 className='sm:text-xl'>Subtotal ({SelectedItems?.length} item): <strong>{FormataBRL(finalPrice)}</strong></h2>
              :
              <h2 className='text-xl'>Nenhum item no pedido</h2>
            }
          </div>
        </form>
        <Footer />
      </main>
    </>
  )
}
