import Card from '../Components/Card'
import Title from '../Components/Title'

function Services () {
  return (
    <section id='services' className='flex-col w-full -scroll-mt-10'>
      <Title title='Our ' span='Services'/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card
          title='Web Desing'
          img='s-1'
          style='shadow-xl'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi?' />
        <Card
          title='Seo Marketing'
          img='s-2'
          style='shadow-xl'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi?' />
        <Card
          title='Web Hosting'
          img='s-3'
          style='shadow-xl'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi?' />
        <Card
          title='Digital Marketing'
          img='s-4'
          style='shadow-xl'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi?' />
        <Card
          title='Add Campaign'
          img='s-5'
          style='shadow-xl'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi?' />
        <Card
          title='Content Marketing'
          img='s-6'
          style='shadow-xl'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi?' />
      </div>
    </section>
  )
}
export default Services
