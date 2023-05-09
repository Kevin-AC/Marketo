import Button from '../Components/Button'
function Hero () {
  return (
    <section id='hero' className='bg-bg relative pt-7 -mt-10 w-full lg:flex-row'>
      <div className="flex flex-col items-center gap-6 mb-4 text-center lg:text-left lg:items-start">
        <h3 className="text-3xl font-semibold lg:text-4xl ">grow your business with us</h3>
        <p className="text-lightColor  text-sm lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Facere atque sapiente veritatis nesciunt adipisci culpa.</p>
        <Button text='Try For Free' />
      </div>
      <div className='w-full h-auto '>
          <img src="/assets/rocket.svg" alt="Rocket image" />
        <div className='cloud '></div>
        <div className="cloud cloud-1"></div>
    </div>
    </section>
  )
}
export default Hero
