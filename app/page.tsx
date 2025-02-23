import Navbar from "@/components/Navbar"
import Explore from "@/pages/Explore"
import Hero from "@/pages/Hero"

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
    </main>
  )
}


