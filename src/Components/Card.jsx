import Button from './Button'

// eslint-disable-next-line react/prop-types
function Card ({ title, paragraph, img, style, styleT, icon, data1, data2 }) {
  return (
    <div className={`h-auto pt-8 p-4 border border-[rgba(0,0,0,.1)] bg-white flex flex-col gap-3 items-center rounded-lg shadow-lg ${style}`}>
      {paragraph && <img src={`/assets/${img}.png`} />}
      {!paragraph && <i className={`text-mainColor bg-bg rounded-full w-10 h-10 grid place-content-center ${icon}`}></i>}
      <h2 className={`text-2xl font-semibold text-black ${styleT}`}>{title}</h2>
      <p className='text-sm text-lightColor text-center'>{paragraph}</p>
      <article className=' text-lightColor text-xs text-center'>
        <p>{data1}</p>
        <p>{data2}</p>
      </article>
      {paragraph && <Button text='Learn More' />}
    </div>
  )
}
export default Card
