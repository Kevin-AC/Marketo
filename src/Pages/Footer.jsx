export function Footer () {
  return (
    <footer className="w-full h-auto p-4 bg-bg">
      <div className="flex flex-col gap-7">
        <ul className="flex flex-col gap-2 text-lightColor text-sm">
          <h3 className="text-2xl font-semibold text-black mb-4">Our Branches</h3>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> India</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> USA</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> France</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> Japan</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> Russia</a></li>
        </ul>
        <ul className="flex flex-col gap-2 text-lightColor text-sm">
          <h3 className="text-2xl font-semibold text-black mb-4">Quick Links</h3>
          <a href="#"> <i className="fas fa-arrow-right text-mainColor"></i> home </a>
          <a href="#"> <i className="fas fa-arrow-right text-mainColor"></i> services </a>
          <a href="#"> <i className="fas fa-arrow-right text-mainColor"></i> about </a>
          <a href="#"> <i className="fas fa-arrow-right text-mainColor"></i> portfolio </a>
          <a href="#"> <i className="fas fa-arrow-right text-mainColor"></i> pricing </a>
          <a href="#"> <i className="fas fa-arrow-right text-mainColor"></i> review </a>
          <a href="#"> <i className="fas fa-arrow-right text-mainColor"></i> contact </a>
        </ul>
        <ul className="flex flex-col gap-2 text-lightColor text-sm">
          <h3 className="text-2xl font-semibold text-black mb-4">Our Services</h3>
          <a href="#"> <i className="fas fa-check text-mainColor"></i> web design </a>
          <a href="#"> <i className="fas fa-check text-mainColor"></i> digital marketing </a>
          <a href="#"> <i className="fas fa-check text-mainColor"></i> email marketing </a>
          <a href="#"> <i className="fas fa-check text-mainColor"></i> content marketing </a>
          <a href="#"> <i className="fas fa-check text-mainColor"></i> seo marketing </a>
        </ul>
        <ul className="flex flex-col gap-2 text-lightColor text-sm">
          <h3 className="text-2xl font-semibold text-black mb-4">Follow Us</h3>
          <a href="#"> <i className="fab fa-facebook-f text-mainColor"></i> facebook </a>
          <a href="#"> <i className="fab fa-twitter text-mainColor"></i> twitter </a>
          <a href="#"> <i className="fab fa-instagram text-mainColor"></i> instagram </a>
          <a href="#"> <i className="fab fa-linkedin text-mainColor"></i> linkedin </a>
          <a href="#"> <i className="fab fa-pinterest text-mainColor"></i> pinterest </a>
        </ul>
      </div>
      <div className="text-center w-full my-10">
        <p>Create BY <a className="text-mainColor" href="">Kevin Argumedo </a></p>
      </div>

    </footer>
  )
}
