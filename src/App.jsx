import Header from './Components/Header'
import About from './Pages/About'
import Hero from './Pages/Hero'
import OurPortfolio from './Pages/OurPortfolio'
import { OurPricing } from './Pages/OurPricing'
import Services from './Pages/Services'
function App () {
  return (
    <main className="w-screen h-auto bg-white flex flex-col items-center justify-center gap-5 ">
      <Header/>
      <Hero/>
      <Services />
      <About />
      <OurPortfolio />
      <OurPricing />
    </main>
  )
}

export default App
