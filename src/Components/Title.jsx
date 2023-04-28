// eslint-disable-next-line react/prop-types
function Title ({ title, span, style }) {
  return (
    <h1 className={`text-3xl font-semibold text-black my-4  ${style}`}>{title}
    <span className='text-mainColor bg-bg px-2 rounded-lg'>{span}</span>
    </h1>
  )
}
export default Title
