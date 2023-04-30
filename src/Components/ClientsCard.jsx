// eslint-disable-next-line react/prop-types
export function ClienstCard ({ name, img }) {
  return (
    <div className="w-full border shadow-lg p-4 rounded-lg ">
      <div className="flex justify-between" >
        <div className="flex gap-4 items-center mb-5 ">
          <img className="w-16 rounded-full" src={`/assets/${img}.png`} alt="Client Photo" />
          <article>
            <p className="text-xl text-black font-semibold">{name}</p>
            <div className="text-mainColor text-sm">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </article>
        </div>
        <i className="text-5xl text-bg fas fa-quote-right"></i>
      </div>
      <article className="text-xs font-extralight text-lightColor font-style: italic leading-6 ">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui rerum ducimus, fuga numquam itaque modi magnam officiis obcaecati! Aliquid delectus aperiam harum voluptas animi unde sapiente quidem laudantium facere? Deserunt.</p>
        <p className="pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui rerum ducimus, fuga numquam itaque modi magnam officiis obcaecati! Aliquid delectus aperiam harum voluptas animi unde sapiente quidem laudantium facere? Deserunt.</p>
      </article>
    </div>
  )
}
