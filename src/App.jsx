import Header from './Components/Header'
import About from './Pages/About'
import { Clients } from './Pages/Clients'
import { Contact } from './Pages/Contact'
import { Footer } from './Pages/Footer'
import Hero from './Pages/Hero'
import OurPortfolio from './Pages/OurPortfolio'
import { OurPricing } from './Pages/OurPricing'
import Services from './Pages/Services'
function App () {
  return (
    <main className="w-screen h-auto bg-white flex flex-col items-center justify-center gap-10 ">
      <Header/>
      <Hero/>
      <Services />
      <About />
      <OurPortfolio />
      <OurPricing />
      <Clients />
      <Contact/>
      <Footer />
    </main>
  )
}

export default App
