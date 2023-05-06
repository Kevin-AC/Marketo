// eslint-disable-next-line react/prop-types
function Title ({ title, span, style }) {
  return (
    <h1 className={`text-3xl lg:text-[44px] font-semibold text-black my-4 items-center gap-2 mb-14 ${style}`}>{title}
    <span className='text-mainColor bg-bg p-1 rounded-lg'>{span}</span>
    </h1>
  )
}
export default Title
