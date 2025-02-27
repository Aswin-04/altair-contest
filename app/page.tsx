import Navbar from "@/components/Navbar"
import ContactUs from "@/pages/ContactUs"
import Explore from "@/pages/Explore"
import Hero from "@/pages/Hero"
import Register from "@/pages/Register"
import Submit from "@/pages/Submit"

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Explore></Explore>
      </section>
      <section>
        <Register></Register>
      </section>
      <section>
        <Submit></Submit>
      </section>
      <section>
        <ContactUs></ContactUs>
      </section>
    </main>
  )
}


