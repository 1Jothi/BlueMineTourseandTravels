import React, { useState, useEffect } from 'react';
import { FaStar, FaTrash, FaEdit } from 'react-icons/fa';

function Testimonial() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', location: '', rating: 0, review: '', photo: null, video: null });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewReview({ ...newReview, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      const updatedReviews = editingIndex !== null
        ? reviews.map((rev, index) => (index === editingIndex ? newReview : rev))
        : [...reviews, newReview];
      
      setReviews(updatedReviews);
      setNewReview({ name: '', location: '', rating: 0, review: '', photo: null, video: null });
      setEditingIndex(null);
      sendWhatsAppThankYou(newReview.name);
    }
  };

  const sendWhatsAppThankYou = (name) => {
    const message = `Thank you ${name} for your review! We appreciate your feedback.`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=+91XXXXXXXXXX&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  const handleEdit = (index) => {
    setNewReview(reviews[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Testimonial</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-xxl py-5 wow fadeInUp">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-primary px-3">Testimonial</h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          
          <div className="row">
            {reviews.map((rev, index) => (
              <div key={index} className="col-md-4 testimonial-item bg-white text-center border p-4 shadow-lg rounded">
                {rev.photo && <img src={URL.createObjectURL(rev.photo)} alt='user' className="rounded-circle mb-3" style={{ width: 80, height: 80 }} />}
                <h5>{rev.name}</h5>
                <p>{rev.location}</p>
                <p>{rev.review}</p>
                <div className="stars">
                  {[...Array(5)].map((star, i) => (
                    <FaStar key={i} color={i < rev.rating ? "gold" : "gray"} />
                  ))}
                </div>
                {rev.video && (
                  <video width="100%" controls>
                    <source src={URL.createObjectURL(rev.video)} type="video/mp4" />
                  </video>
                )}
                <div className="mt-3">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}><FaEdit /> Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}><FaTrash /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container py-5">
        <h2 className="text-center">Submit Your Review</h2>
        <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-lg">
          <input type="text" name="name" placeholder="Your Name" className="form-control mb-3" value={newReview.name} onChange={handleInputChange} required />
          <input type="text" name="location" placeholder="Your Location" className="form-control mb-3" value={newReview.location} onChange={handleInputChange} />
          <textarea name="review" placeholder="Write your review here..." className="form-control mb-3" value={newReview.review} onChange={handleInputChange} required></textarea>
          <input type="file" name="photo" accept="image/*" className="form-control mb-3" onChange={handleFileChange} />
          <input type="file" name="video" accept="video/*" className="form-control mb-3" onChange={handleFileChange} />
          <label className="mb-2">Rating:</label>
          <div className="mb-3">
            {[...Array(5)].map((star, i) => (
              <FaStar key={i} color={i < newReview.rating ? "gold" : "gray"} onClick={() => setNewReview({ ...newReview, rating: i + 1 })} style={{ cursor: 'pointer' }} />
            ))}
          </div>
          <button type="submit" className="btn btn-primary w-100">{editingIndex !== null ? 'Update Review' : 'Submit Review'}</button>
        </form>
      </div>
    </div>
  );
}

export default Testimonial;
