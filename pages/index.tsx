import Head from 'next/head'
import Image from 'next/image'
import evento1 from '../public/cover/4.jpg';
import evento2 from '../public/cover/1.jpg';
import evento3 from '../public/cover/3.jpg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import shapes from '../data/shapes.json';
import ShapeHome from '../components/shape/ShapeHome';


export default function Home() {


  return (
    <div >

      <Head>
        <title>Thrasher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.webp" />
      </Head>

      <header>
        <NavBar />
      </header>

      <main>

        <section className='py-12'>
          <h2 className="titulo">Shapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2 gap-6  justify-items-center">
            {shapes.map(item => (
              <ShapeHome key={item.Nome} Nome={item.Nome} Path={item.imagem} />
            ))}
          </div>
        </section>

        <section className='pb-10'>
          <h2 className="titulo">Galeria</h2>
          <div className="lg:flex justify-center">
            <div className="px-8 py-4 flex justify-center">
              <Image src={evento1} alt="" width={500} height={500} />
            </div>
            <div className="px-8 py-4 flex justify-center">
              <Image src={evento2} alt="" width={500} height={500} />
            </div>
            <div className="px-8 py-4 flex justify-center">
              <Image src={evento3} alt="" width={500} height={500} />
            </div>
          </div>
        </section>

        <section className='pb-10 px-2'>
          <h2 className="titulo" >SOBRE</h2>
          <div className=" items-center justify-center md:flex md:gap-0 px-8">
            <article className='text-center lg:w-3/5'>
              <p className="text-3xl italic lg:w-3/5 text-center lg:text-left" >A Thrasher Skateboard Magazine é uma revista de publicação mensal sobre o
                skate trazendo entrevistas com skatistas profissionais e artigos sobre esportes, foi fundada em 1981 por Kevin Thatcher e Fausto Vitello.
                A revista também possui uma premiação anual intitulada Skater of the year (Skatista do ano) desde 1990</p>
            </article>
            <div className="hidden lg:flex">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/eFRV-g0I4Us" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
