import './Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [modal, setModal] = useState({ isOpen: false, message: '', success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/sendemail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setModal({ isOpen: true, message: result.message, success: true });
    } catch (error) {
      console.error('Error:', error);
      setModal({ isOpen: true, message: 'Failed to send email.', success: false });
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {modal.isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {modal.success ? (
              <div className="icon success">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
            ) : (
              <div className="icon error">
                <svg viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            )}
            <p>{modal.message}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;