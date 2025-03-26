import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [error, setError] = useState("");

  // Your WhatsApp number (without "+" or spaces)
  const whatsappNumber = "919947491041"; // Change this to your actual number

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle WhatsApp Message Sending
  const sendMessageToWhatsApp = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.description) {
      setError("All fields are required.");
      return;
    }

    // Format WhatsApp Message
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.description}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    // Open WhatsApp silently
    window.open(whatsappURL, "_blank");
};

  return (
    <>
      <Navbar />
      <div
        id="contact"
        className="d-flex justify-content-center align-items-center mt-5"
        style={{ minHeight: "100vh", backgroundColor: "black" }}
      >
        <div
          ref={ref}
          className="card p-4 border-0 shadow-lg text-white"
          style={{ maxWidth: "500px", width: "100%", backgroundColor: "black" }}
        >
          <h2 className="text-center mb-4">
            Contact <span style={{ color: "rgba(23, 207, 23, 0.94)" }}>Me</span>
          </h2>

          {/* Display Error Message */}
          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={sendMessageToWhatsApp}>
            <motion.div
              className="mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.09 }}
            >
              <label className="form-label text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter your name"
                required
              />
            </motion.div>

            <motion.div
              className="mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.07 }}
            >
              <label className="form-label text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div
              className="mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.07 }}
            >
              <label className="form-label text-white">Message</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control bg-dark text-white border-secondary"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: "rgba(23, 207, 23, 0.94)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.79 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
