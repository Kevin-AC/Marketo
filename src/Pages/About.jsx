import Button from '../Components/Button'
import Card from '../Components/Card'
import Title from '../Components/Title'

function About () {
  return (
    <section>
      <Title title='Us' span='About' style='flex flex-row-reverse ' />
      <div className='flex flex-col lg:flex-row gap-4'>
        <img src="/assets/about-img.png" alt="about ilustration" />
        <div className='flex flex-col gap-4'>
          <h3 className='text-black font-semibold text-2xl'>big projects start with big dreams</h3>
          <p className='text-left text-sm text-lightColor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias blanditiis, fugiat consequatur enim amet ullam facere quaerat, quos quae mollitia inventore! Hic, excepturi debitis velit maxime ut in at iusto.</p>
          <Button text='Learn More' style='w-32' />
         <div className='flex flex-wrap gap-2 '>
            <div className='flex-auto'>
              <Card
                icon='fas fa-award'
                title='14 Award Won'
                styleT='text-xs' />
            </div>
            <div className='flex-auto'>
              <Card
                icon='fas fa-user'
                title='250 satisfied clients'
                styleT='text-xs' />
            </div>
            <div className='flex-1'>
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
