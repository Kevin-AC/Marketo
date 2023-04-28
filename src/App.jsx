import Header from './Components/Header'
import About from './Pages/About'
import Hero from './Pages/Hero'
import OurPortfolio from './Pages/OurPortfolio'
import Services from './Pages/Services'
function App () {
  return (
    <main className="w-screen h-auto bg-white ">
      <Header/>
      <Hero/>
      <Services />
      <About />
      <OurPortfolio />
    </main>
  )
}

export default App
