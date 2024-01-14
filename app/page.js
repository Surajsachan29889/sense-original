import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Sec1 from './components/sec-1'
import Sec2 from './components/sec-2'
import SliderSec from './components/slider-sec'
import MidSec from './components/mid-sec'
import SupportSec from './components/support-sec'
import ContactForm from './components/connect-form'
import FaqSec from './components/faq-sec'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Sec1/>
      <Sec2/>
      <SliderSec/>
      <MidSec/>
      <SupportSec/>
      <ContactForm/>
      <FaqSec/>
      <Footer/>
    </main>
  )
}
