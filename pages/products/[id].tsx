import { useRouter } from "next/router"
import Image from 'next/image'
import NavBar from "../../components/NavBar"
import { AiOutlineArrowLeft, AiOutlineCreditCard, } from "react-icons/ai";
import shapes from '../../data/shapes.json';
import { FormataBRL } from '../../utils/FormataBRL'
import { CiMoneyBill } from "react-icons/ci";
import Shapeforms from '../../components/shape/ShapeForm'
import Link from 'next/link';
import Footer from '../../components/Footer';
import Head from 'next/head';

const Produto = () => {
  const router = useRouter()
  const { id } = router.query
  const Shape = shapes.filter((item) => item.Nome === id)

  function calculaJurosEmParcela(valor: number) {
    const juros = Math.round((valor * 7) / 100)
    const valorFinal = valor + juros
    return Math.round(valorFinal / 6)
  }

  return (
    <>
      <Head>
        <title>Thrasher</title>
      </Head>
      <NavBar />
      <main className='px-10 xl:m-auto xl:w-[47rem] 2xl:w-[65rem] py-16 '>
        <Link href='/' className='flex items-center gap-2 py-4'>
          <AiOutlineArrowLeft className='w-5 h-5' />
          <p className='uppercase text-2xl'>Retornar</p>
        </Link>
        <section>
          {Shape.map(item => (
            <div key={item.Nome} className='flex flex-col sm:flex-row items-center sm:items-start gap-8' >
              <Image src={item.imagem} alt='foto de um shape' width={600} height={600} className='border-[1px] border-black w-[300px] h-[300px] lg:h-[600px] lg:w-[600px]' />
              <aside>
                <h1 className='text-lg sm:text-2xl xl:text-3xl'>{id}</h1>
                <div className='py-2'>
                  <p className='sm:text-xl xl:text-2xl'>{FormataBRL(item.Preco)}</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                  <div className='flex items-center gap-2'>
                    <AiOutlineCreditCard className='w-7 h-7' />
                    <p>Em até 6x de {FormataBRL(calculaJurosEmParcela(item.Preco))}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CiMoneyBill className='w-7 h-7' />
                    <p><strong>5% de desconto</strong> pagando à vista</p>
                  </div>
                </div>
                <Shapeforms Price={item.Preco} Name={item.Nome} Image={item.imagem} />
              </aside>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Produto
