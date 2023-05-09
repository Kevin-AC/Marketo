import Button from '../Components/Button'
import Card from '../Components/Card'
import Title from '../Components/Title'

function About () {
  return (
    <section id='about' className='-scroll-mt-14'>
      <Title title='Us' span='About' style='flex flex-row-reverse  ' />
      <div className='flex flex-col items-center mt-8 sm:flex-row gap-4 lg:gap-8'>
        <img className='w-auto sm:w-96 lg:w-[450px]' src="/assets/about-img.png" alt="about ilustration" />
        <div className='flex flex-col gap-4'>
          <h3 className='text-black font-semibold text-2xl lg:text-3xl'>big projects start with big dreams</h3>
          <p className='text-left text-sm text-lightColor lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias blanditiis, fugiat consequatur enim amet ullam facere quaerat, quos quae mollitia inventore! Hic, excepturi debitis velit maxime ut in at iusto.</p>
          <Button text='Learn More' style='w-32' />
         <div className='w-full grid grid-cols-2 sm:grid-cols-3  gap-2'>
              <Card
                icon='fas fa-award'
                title='14 Award Won'
                styleT='text-xs' />

              <Card
                icon='fas fa-user'
                title='250 satisfied clients'
                styleT='text-xs' />

            <div className='col-span-3 sm:col-auto'>
              <Card
                icon='fas fa-project-diagram'
                title='200 projects completed'
                styleT='text-xs' />
             </div>
         </div>
        </div>
      </div>
    </section>
  )
}
export default About
