import { useRouter } from "next/router"
import Image from 'next/image'
import NavBar from "../../components/NavBar"
import { AiOutlineArrowLeft, AiOutlineCreditCard, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import shapes from '../../data/shapes.json';
import { FormataBRL } from '../../utils/FormataBRL'
import { CiMoneyBill } from "react-icons/ci";
import Shapeforms from '../../components/Shapeforms'
import Link from 'next/link';
import Footer from '../../components/Footer';

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
      <NavBar />
      <main className='m-auto w-[72rem] my-16 '>
        <Link href='/' className='flex items-center gap-4 py-4'>
          <AiOutlineArrowLeft />
          <p className='uppercase text-2xl'>Retornar</p>
        </Link>
        <section>
          {Shape.map(item => (
            <div key={item.Nome} className='flex gap-8' >
              <Image src={item.imagem} alt='foto de um shape' width={600} height={600} className='border-[1px] border-black' />
              <aside>
                <h1 className='text-3xl'>{id}</h1>
                <div className='py-2'>
                  <p className='text-2xl'>{FormataBRL(item.Preco)}</p>
                </div>
                <div className='flex gap-6'>
                  <div className='flex items-center gap-2'>
                    <AiOutlineCreditCard />
                    <p>Em até 6x de {FormataBRL(calculaJurosEmParcela(item.Preco))}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CiMoneyBill className='text-xl' />
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