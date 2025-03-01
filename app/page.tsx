import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ContactUs from '@/pages/ContactUs'
import Explore from '@/pages/Explore'
import Hero from '@/pages/Hero'
import Register from '@/pages/Register'
import Submit from '@/pages/Submit'

export default function Home() {
  return (
    <main className=''>
      <div className='relative'>
        <Navbar></Navbar>
      </div>
      <section id='about' className='padding-x'>
        <Hero></Hero>
      </section>
      <section id='explore' className='padding-x'>
        <Explore></Explore>
      </section>
      <section id='register' className='padding'>
        <Register></Register>
      </section>
      <section id='submit' className='padding'>
        <Submit></Submit>
      </section>
      <section id='contact' className='padding'>
        <ContactUs></ContactUs>
      </section>
      <Footer></Footer>
    </main>
  )
}
