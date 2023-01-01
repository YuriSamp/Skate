import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IShapes } from '../utils/interfaces/Shape';
import { ListaDeCompras } from '../utils/atom';
import { useRecoilState } from 'recoil';

type Props = {
  Price: number
  Name: string
  Image: string
}

function Shapeforms({ Price, Name, Image }: Props) {

  const [Quantity, setQuantity] = useState(1);
  const [Size, setSize] = useState('');
  const [list, setList] = useRecoilState<IShapes[]>(ListaDeCompras);
  const [errMsg, setErrMsg] = useState('');
  const [sucessMsg, setSucessMsg] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (Size === '' || Size === 'Selecione uma opção') {
      setErrMsg('Por favor selecione o tamanho desejado')
      return
    }
    const cartItem = {
      Price,
      Name,
      Image,
      Quantity,
      Size
    }
    setList((prevState) => [...prevState, cartItem])
    setSucessMsg('Seu item foi adicionado ao carrinho')

    setTimeout(() => {
      setSucessMsg('')
    }, 4000);
  }

  function handleQuantity(number: number, operation: string) {
    const rangeOfSum = number >= 1 && number < 10
    const rangeOfSubtraction = number > 1 && number <= 10
    if (operation === 'SUM' && rangeOfSum) {
      setQuantity(number + 1)
    }

    if (operation === 'SUBTRACTION' && rangeOfSubtraction)
      setQuantity(number - 1)
  }

  function HandleSelect(size: React.ChangeEvent<HTMLSelectElement>) {
    setSize(size.target.value)
    setErrMsg('')
  }

  return (
    <form onSubmit={onSubmit}>
      <section className='flex flex-col gap-2 pt-6'>
        <h3 className='py-2 text-lg'>Selecione uma opção de <strong>Tamanho:</strong></h3>
        <select className='w-[22rem] px-2 py-3 text-gray-600' required onChange={e => HandleSelect(e)}>
          <option>Selecione uma opção</option>
          <option>8.50</option>
          <option>8.25</option>
          <option>8.125</option>
          <option>8.0</option>
          <option>7.75</option>
        </select>
        <p className='text-red-600 font-bold'>{errMsg}</p>
        <h3 className='pt-4'>Disponibilidade: imediata</h3>
        <div className='flex items-center gap-6 pt-4'>
          <h3>Quantidade:</h3>
          <div className='flex items-center gap-4 border-[1px] py-2 px-2'>
            <AiOutlineMinus onClick={() => handleQuantity(Quantity, 'SUBTRACTION')} className='hover:cursor-pointer' />
            <input value={Quantity} className='w-8 border-none text-center outline-none' onChange={(e) => setQuantity(Number(e.currentTarget.value))} />
            <AiOutlinePlus onClick={() => handleQuantity(Quantity, 'SUM')} className='hover:cursor-pointer' />
          </div>
        </div>
        <div className='mt-4'>
          <button className='w-[22rem] bg-black text-white text-2xl py-4' type='submit' >Comprar</button>
        </div>
        <div className='pt-4'>
          <p className='text-green-600 font-bold'>{sucessMsg}</p>
        </div>
      </section>
    </form>
  )
}

export default Shapeforms