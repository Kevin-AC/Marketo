import { PricingCard } from '../Components/PricingCard'
import Title from '../Components/Title'

export function OurPricing () {
  return (
    <section className='w-full'>
      <Title title='Our ' span='Pricing' />
      <div className='w-full grid sm:grid-cols-3 gap-4'>
        <PricingCard
        type='Basic Plan'
        price='30.99'
        data='5GB'
        domains='2'
        img='p-1'
        />
        <PricingCard
          type='Standard Plan'
          price='50.99'
          data='10GB'
          domains='10'
          img='p-2'
        />
        <PricingCard
          type='Premiun Plan'
          price='90.99'
          data='20GB'
          domains='20'
          img='p-3'
        />
      </div>
    </section>
  )
}
