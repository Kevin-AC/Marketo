
import Card from '../Components/Card'
import Title from '../Components/Title'
import Map from '../Components/Map'
import { Form } from '../Components/Form'
export function Contact () {
  return (
    <section id='contact' className='w-full flex flex-col gap-4 -scroll-mt-14'>
      <Title title='Us' span='Contact' style='flex flex-row-reverse gap-2' />
      <div className='w-full h-auto grid sm:grid-cols-3 gap-4 '>
        <Card
          title='Our Number'
          icon='fas fa-phone'
          data1='326-568-951'
          data2='123-5568-489'
        />
        <Card
          title='Our Email'
          icon='fas fa-envelope'
          data1='tarke-lodr@gmial.com'
          data2='shaikannas@gmail.com'
        />
        <Card
          title='Our Location'
          icon='fas fa-map-marker-alt'
          data1='munbai,india'
          data2='400104'
        />
      </div>
      <div className='p-4 w-full h-auto border rounded-lg shadow-md'>
        <Map />
      </div>
      <Form />
    </section>
  )
}
