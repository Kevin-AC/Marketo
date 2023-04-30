import Button from '../Components/Button'
function Hero () {
  return (
    <section className='bg-bg relative pt-7 -mt-5'>
      <div className="flex flex-col items-center gap-6 mb-4">
        <h3 className="text-3xl font-semibold text-center">grow your business with us</h3>
        <p className="text-lightColor text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Facere atque sapiente veritatis nesciunt adipisci culpa.</p>
        <Button text='Try For Free' />
      </div>
     <div className='w-full h-auto'>
        <img src="/assets/rocket.svg" alt="Rocket image" />
     </div>
    <div className='cloud '></div>
    <div className="cloud cloud-1"></div>
    </section>
  )
}
export default Hero
