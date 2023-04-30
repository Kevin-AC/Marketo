import Button from './Button'
// eslint-disable-next-line react/prop-types
export function PricingCard ({ type, price, data, domains, img }) {
  return (
    <article className='cardPricing'>
      <h3 className='text-black font-semibold text-xl'>{type}</h3>
      <img className='w-44' src={`/assets/${img}.png`} alt="" />
      <p><span>$</span>{price}<span>/Mo</span></p>
      <ul className='flex flex-col gap-4 text-center text-lightColor text-sm'>
        <li >{data} Data</li>
        <li>{domains} Domains</li>
        <li>Seo Marketing</li>
        <li>24/7 Services</li>
        <li>Maintainance</li>
      </ul>
      <Button text='Choose Plan' />
    </article>
  )
}
