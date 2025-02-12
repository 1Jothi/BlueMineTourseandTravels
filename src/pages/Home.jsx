import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const packages = [
  {
    country: "Russia",
    nights: 3,
    persons: 2,
    price: 78000,
    img: "assets/img/package-1.jpg",
  },
  {
    country: "Thailand",
    nights: 3,
    persons: 2,
    price: 13000,
    img: "assets/img/package-2.jpg",
  },
  {
    country: "Almaty",
    nights: 4,
    persons: 2,
    price: 45000,
    img: "assets/img/package-3.jpg",
  },
  {
    country: "Bhutan",
    nights: 2,
    persons: 2,
    price: 28000,
    img: "assets/img/package-1.jpg",
  },
  {
    country: "maldives",
    nights: 3,
    persons: 2,
    price: 45000,
    img: "assets/img/package-2.jpg",
  },
  {
    country: "Mauririus",
    nights: 3,
    persons: 2,
    price: 45000,
    img: "assets/img/package-3.jpg",
  },
  {
    country: "Nepal",
    nights: 2,
    persons: 2,
    price: 15000,
    img: "assets/img/package-1.jpg",
  },
  {
    country: "Malaysia",
    nights: 3,
    persons: 2,
    price: 12000,
    img: "assets/img/package-2.jpg",
  },
  {
    country: "Srilanka",
    nights: 3,
    persons: 2,
    price: 13000,
    img: "assets/img/package-1.jpg",
  },
];


export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleSearch = () => {
    const result = packages.filter((pkg) =>
      pkg.country.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPackages(result);
    setShowResults(true);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
    destination: "Thailand", // Default option
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      booking_date: formData.datetime,
      destination: formData.destination,
      message: formData.message,
    };

    emailjs
      .send(
        "service_c1or5l7", // Replace with your EmailJS Service ID
        "template_hdgb8lo", // Replace with your EmailJS Template ID
        templateParams,
        "Mv8pC7TO9YdU2udG_" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Booking Successful! Check your email.");
        },
        () => {
          alert("Error sending email. Please try again.");
        }
      );
  }; 
   return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
              We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers.
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                  onClick={handleSearch}
                 
                
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showResults && (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Packages
              </h6>
              <h1 className="mb-5">Awesome Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
              {filteredPackages.length > 0 ? (
                filteredPackages.map((pkg, index) => (
                  <div key={index} className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="package-item">
                      <div className="overflow-hidden">
                        <img className="img-fluid" src={pkg.img} alt={pkg.country} />
                      </div>
                      <div className="d-flex border-bottom">
                        <small className="flex-fill text-center border-end py-2">
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          {pkg.country}
                        </small>
                        <small className="flex-fill text-center border-end py-2">
                          <i className="fa fa-calendar-alt text-primary me-2" />
                          {pkg.nights} nights
                        </small>
                        <small className="flex-fill text-center py-2">
                          <i className="fa fa-user text-primary me-2" />
                          {pkg.persons} Person
                        </small>
                      </div>
                      <div className="text-center p-4">
                        <h3 className="mb-0">Rs {pkg.price}/- per person</h3>
                        <div className="d-flex justify-content-center mb-2">
                          <a href="#" className="btn btn-sm btn-primary px-3 border-end">
                            Read More
                          </a>
                          <a href="#" className="btn btn-sm btn-primary px-3">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">Not Available</p>
              )}
            </div>
          </div>
        </div>
      )}
   {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">Tourist</span>
            </h1>
            <p className="mb-4">
            We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers.Clita erat ipsum et lorem et sit.
            </p>
            <p className="mb-4">
            We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  First Class Flights
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Handpicked Hotels
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />5 Star
                  Accommodations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Latest Model Vehicles
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  150 Premium City Tours
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  24/7 Service
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Service Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                We are a passionate team committed to providing innovative solutions to our clients. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}
    {/* Destination Start */}
    
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Popular Destination</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-1.jpg"
                    alt=""
                  />
                  {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  GST 5% + TCS 5%
                  </div> */}
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Thailand
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                  {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  GST 5% + TCS 5%
                  </div> */}
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Malaysia
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-3.jpg"
                    alt=""
                  />
                  {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  GST 5% + TCS 5% 
                  </div> */}
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Russia
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/destination-4.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
              GST 5% + TCS 5%
              </div> */}
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
              Nepal
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    {/* Destination Start */}
    {/* Package Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Packages
          </h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-1.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Russia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 nights
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 78000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 90000/- Per Person (Approximately Ex-Chennai)
                 {/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
3 nights 3* accommodation in Moscow with breakfast
2 nights 3* accommodation in St. Petersburg with breakfast
Moscow city tour
St. Petersburg city tour
Round trip speed train tickets (Moscow – St. Petersburg – Moscow)
Return airport transfers

Exclusions:
Lunch & Dinner		

                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  almaty
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />4 night
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 45000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 50000/- Per Person (Approximately Ex-Chennai)
                 {/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
                4 nights 3* accommodation in Almaty with breakfast
Almaty City tour
Meadows & Chimbulak tour
Kok tobe tour
Return airport transfers
Exclusions:
Lunch & Dinner
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Bhutan
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />2 night
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 28000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 20000/- Per Person (Approximately Ex-Chennai)
                 {/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
2 nights 3* accommodation in Thimphu with breakfast
1 night 3* accommodation in Paro with breakfast
Thimphu city tour
Paro city tour
Return airport transfers

Exclusions:
Lunch & Dinner
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
<div className="package-item">
<div className="overflow-hidden">
<img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
</div>
<div className="d-flex border-bottom">
<small className="flex-fill text-center border-end py-2">
<i className="fa fa-map-marker-alt text-primary me-2" />
maldives
</small>
<small className="flex-fill text-center border-end py-2">
<i className="fa fa-calendar-alt text-primary me-2" />3 night
</small>
<small className="flex-fill text-center py-2">
<i className="fa fa-user text-primary me-2" />2 Person
</small>
</div>
<div className="text-center p-4">
<h3 className="mb-0">Rs 45000/- per person</h3>
<div className="mb-3">
<small className="fa fa-star text-primary" />
<small className="fa fa-star text-primary" />
<small className="fa fa-star text-primary" />
<small className="fa fa-star text-primary" />
<small className="fa fa-star text-primary" />
</div>
<p>
Airfare – Rs. 20000/- Per Person (Approximately Ex-Chennai)
{/* GST 5% + TCS 5% extra from the total invoice */}
</p>
<p>
Inclusions:
3 nights 3* accommodation in Maldives with breakfast
Male city tour (walking tour)
Return airport transfers

Exclusions:
Lunch & Dinner
</p>
<div className="d-flex justify-content-center mb-2">
<a
href="#"
className="btn btn-sm btn-primary px-3 border-end"
style={{ borderRadius: "30px 0 0 30px" }}
>
Read More
</a>
<a
href="#"
className="btn btn-sm btn-primary px-3"
style={{ borderRadius: "0 30px 30px 0" }}
>
Book Now
</a>
</div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  mauririus
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 night
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 45000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 45000/- Per Person (Approximately Ex-Chennai)
                 {/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
                3 nights 3* accommodation in Mauritius with breakfast
                 North Tour 
                 South tour
                    Ilu Aux Cert tour 
                    Return airport transfers
                    Exclusions:
                    Lunch & Dinner
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  nepal
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />2 night
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 15000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 25000/- Per Person (Approximately Ex-Chennai)
                 {/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
2 nights 3* accommodation in Kathmandu with breakfast
1 night 3* accommodation in Nagarkot with breakfast
Kathmandu city tour + Temple tours
Nagarkot city tour + Early morning sunrise tour
Return airport transfers
Exclusions:
Lunch & Dinner	
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  malaysia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 night
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 12000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 15000/- Per Person (Approximately Ex-Chennai)
                 {/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
3 nights 3* accommodation in Kuala lumpur with breakfast
Kuala lumpur city tour
Batu Caves
KL tower tour
Aquarium
Return airport transfers
Exclusions:
Lunch & Dinner
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Thailand
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 night
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 13000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 16000/- Per Person (Approximately Ex-Chennai)
                 {/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
2 nights 3* accommodation in Pattaya with breakfast
1 night 3* accommodation in Bangkok with breakfast
Alcasar show
Coral island tour with lunch
Bangkok city tour
Return airport transfers

Exclusions:
Lunch & Dinner
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-3.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Srilanka
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 night
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">Rs 13000/- per person</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                Airfare – Rs. 10000/- Per Person (Approximately Ex-Chennai)
{/* GST 5% + TCS 5% extra from the total invoice */}
                </p>
                <p>
                Inclusions:
1 night 3* accommodation in Kandy with breakfast
1 night 3* accommodation in Nuwara Eliya with breakfast
1 night 3* accommodation  in Colombo with breakfast
Kandy City tour 
Pinnawala Elephant orphanage
Nuwara eliya city tour
Colombo city tour
Return airport transfers

Exclusions:
Lunch & Dinner
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

       <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
              We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
              We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers.
              </p>
              <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date">
                      <input
                        type="datetime-local"
                        className="form-control bg-transparent"
                        id="datetime"
                        placeholder="Date & Time"
                        value={formData.datetime}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-transparent"
                        id="destination"
                        value={formData.destination}
                        onChange={handleChange}
                      >
                        <option value="Thailand">Thailand</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Russia">Russia</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                      </select>
                      <label htmlFor="destination">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: 100 }}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-outline-light w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Booking Start */}
    {/* Process Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Process
          </h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-globe fa-3x text-white" />
              </div>
              <h5 className="mt-4">Choose A Destination</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
              We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-dollar-sign fa-3x text-white" />
              </div>
              <h5 className="mt-4">Pay Online</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
              We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-plane fa-3x text-white" />
              </div>
              <h5 className="mt-4">Fly Today</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
              We are a passionate team committed to providing innovative solutions to our clients. We specialize in web development, graphic design, and IT consulting. Our goal is to deliver exceptional service, focused on quality, reliability, and customer satisfaction. We aim to drive results that create value for both businesses and customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Start */}
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Travel Guide
          </h6>
          <h1 className="mb-5">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-1.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>123 street india chennai</p>
            <p className="mb-0">
            We are a passionate team committed to providing innovative solutions to our clients.  We aim to drive results that create value for both businesses and customers.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-2.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p> 123 street india chennai</p>
            <p className="mt-2 mb-0">
            We are a passionate team committed to providing innovative solutions to our clients.  We aim to drive results that create value for both businesses and customers.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-3.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p> 123 street india chennai</p>
            <p className="mt-2 mb-0">
            We are a passionate team committed to providing innovative solutions to our clients.  We aim to drive results that create value for both businesses and customers.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-4.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>123 street india  chennai</p>
            <p className="mt-2 mb-0">
            We are a passionate team committed to providing innovative solutions to our clients.  We aim to drive results that create value for both businesses and customers.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonial End */}  
    </div>
  )
}
