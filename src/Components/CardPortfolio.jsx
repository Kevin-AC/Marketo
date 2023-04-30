
// eslint-disable-next-line react/prop-types
function CardPortfolio ({ title, paragraph, number, img }) {
  return (
    <div className='boxPortfolio'>
      <span className="text-black text-5xl font-semibold absolute right-0 p-3">{number}</span>
      <img className="w-full h-full object-cover" src={`/assets/${img}.jpg`}/>
      <div className='boxPortfolio__Content'>
        <h3 className='text-black font-semibold text-2xl'>{title}</h3>
        <p className='text-xs text-lightColor'>{paragraph}</p>
      </div>
    </div>
  )
}
export default CardPortfolio
