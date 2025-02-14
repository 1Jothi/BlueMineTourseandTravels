import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email
    const mailtoLink = `mailto:bluemineTravels@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    // Sending WhatsApp message
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/916383963146?text=${whatsappMessage}`;
    window.open(whatsappLink, "_blank");

    setSubmitted(true);
  };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Contact Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Get In Touch</h5>
              <p className="mb-4">
                We are a passionate team committed to providing innovative solutions to our clients.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}>
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">
                    Shop No. FF 5, SK Complex, Chennai By-pass, <br />
                    No.1 Tolgate, Trichy-621-216
                  </p>
                </div>
              </div>

              {/* Phone Number with WhatsApp Link */}
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}>
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">
                    <a href="https://wa.me/916383963146" target="_blank" rel="noopener noreferrer"
                      style={{ color: "black", textDecoration: "underline", fontWeight: "bold" }}>
                      9597109652 | 73097075761
                    </a>
                  </p>
                </div>
              </div>

              {/* Email with Mailto Link */}
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}>
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">
                    <a href="mailto:bluemineTravels@gmail.com"
                      style={{ color: "block", textDecoration: "underline" }}>
                      bluemineTravels@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096196!2d144.95373631531677!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d7b8908c80!2sFederation+Square!5e0!3m2!1sen!2sau!4v1616782937528!5m2!1sen!2sau"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>

            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 100 }} value={formData.message} onChange={handleChange} required />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {submitted && <p className="text-success mt-3">Message sent successfully!</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
