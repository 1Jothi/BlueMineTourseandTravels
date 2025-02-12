import React, { useState } from "react";
import emailjs from "emailjs-com";

function Booking() {
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
        "", // Replace with your EmailJS Service ID
        "", // Replace with your EmailJS Template ID
        templateParams,
        "" // Replace with your EmailJS Public Key
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
          <h1 className="display-3 text-white animated slideInDown">Booking</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Booking
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
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
              <h5 className="mt-4">Book Now</h5>
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
    {/* Booking Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
                We are a passionate team committed to providing innovative solutions...
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
    </div>
  )
}

export default Booking
