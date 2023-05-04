// eslint-disable-next-line react/prop-types
function Button ({ text, style }) {
  return (
    <button className={`btn ${style}`}>
      {text}
    </button>
  )
}
export default Button
