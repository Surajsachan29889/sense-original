import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Sec1 from './components/sec-1'
import Sec2 from './components/sec-2'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Sec1/>
      <Sec2/>
    </main>
  )
}
