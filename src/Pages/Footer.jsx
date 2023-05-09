export function Footer () {
  return (
    <footer className="w-full h-auto p-4 bg-bg">
      <div className="grid justify-items-center  grid-cols-2 lg:grid-cols-4 gap-4 sm:mt-5">
        <ul className="flex flex-col gap-2 text-lightColor text-sm footerUl">
          <h3 className="text-2xl font-semibold text-black mb-4">Our Branches</h3>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> India</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> USA</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> France</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> Japan</a></li>
          <li><a href="#"><i className="fas fa-map-marker-alt text-mainColor"></i> Russia</a></li>
        </ul>
        <ul className="flex flex-col gap-2 text-lightColor text-sm footerUl">
          <h3 className="text-2xl font-semibold text-black mb-4">Quick Links</h3>
          <li><a href="#hero"> <i className="fas fa-arrow-right text-mainColor"></i> home </a></li>
          <li><a href="#services"> <i className="fas fa-arrow-right text-mainColor"></i> services </a></li>
          <li> <a href="#about"> <i className="fas fa-arrow-right text-mainColor"></i> about </a></li>
          <li><a href="#portfolio"> <i className="fas fa-arrow-right text-mainColor"></i> portfolio </a></li>
          <li><a href="#pricing"> <i className="fas fa-arrow-right text-mainColor"></i> pricing </a></li>
          <li><a href="#review"> <i className="fas fa-arrow-right text-mainColor"></i> review </a></li>
          <li><a href="#contact"> <i className="fas fa-arrow-right text-mainColor"></i> contact </a></li>
        </ul>
        <ul className="flex flex-col gap-2 text-lightColor text-sm footerUl">
          <h3 className="text-2xl font-semibold text-black mb-4">Our Services</h3>
          <li><a href="#"> <i className="fas fa-check text-mainColor"></i> web design </a></li>
          <li><a href="#"> <i className="fas fa-check text-mainColor"></i> digital marketing </a></li>
          <li><a href="#"> <i className="fas fa-check text-mainColor"></i> email marketing </a></li>
          <li><a href="#"> <i className="fas fa-check text-mainColor"></i> content marketing </a></li>
          <li><a href="#"> <i className="fas fa-check text-mainColor"></i> seo marketing </a></li>
        </ul>
        <ul className="flex flex-col gap-2 text-lightColor text-sm footerUl">
          <h3 className="text-2xl font-semibold text-black mb-4">Follow Us</h3>
          <li><a href="#"> <i className="fab fa-facebook-f text-mainColor"></i> facebook </a></li>
          <li> <a href="#"> <i className="fab fa-twitter text-mainColor"></i> twitter </a></li>
          <li><a href="#"> <i className="fab fa-instagram text-mainColor"></i> instagram </a></li>
          <li><a href="#"> <i className="fab fa-linkedin text-mainColor"></i> linkedin </a></li>
          <li><a href="#"> <i className="fab fa-pinterest text-mainColor"></i> pinterest </a></li>
        </ul>
      </div>
      <div className="text-center w-full my-10">
        <p>Create BY <a className="text-mainColor" href="">Kevin Argumedo </a></p>
      </div>

    </footer>
  )
}
