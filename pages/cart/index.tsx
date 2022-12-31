import Head from 'next/head'
import NavBar from '../../components/NavBar'

export default function Carrinho() {
  return (
    <div>

      <Head>
        <title>Thrasher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.webp" />
      </Head>

      <header>
        <NavBar />
      </header>
      <main>
        <div className='m-auto w-[72rem] h-16 bg-red-700 my-16 ' />
      </main>
    </div>
  )
}

