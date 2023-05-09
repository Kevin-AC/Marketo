import CardPortfolio from '../Components/CardPortfolio'
import Title from '../Components/Title'

function OurPortfolio () {
  return (
    <section id='portfolio' className='-scroll-mt-10' >
      <Title title='Our ' span='Portfolio' />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
        <CardPortfolio title='Web Design' paragraph='1st may,2021' number='01' img='port-img1' />
        <CardPortfolio title='Web Design' paragraph='1st may,2021' number='02' img='port-img2' />
        <CardPortfolio title='Web Design' paragraph='1st may,2021' number='03' img='port-img3' />
        <CardPortfolio title='Web Design' paragraph='1st may,2021' number='04' img='port-img4' />
        <CardPortfolio title='Web Design' paragraph='1st may,2021' number='05' img='port-img5' />
        <CardPortfolio title='Web Design' paragraph='1st may,2021' number='06' img='port-img6' />
      </div>
    </section>
  )
}
export default OurPortfolio
