<template>
  <div class="about-container">
    <router-link to="/" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Home
    </router-link>
    <h2 class="section-title">About Us</h2>
    <div class="logo-container">
      <img src="assets/logo.png" alt="Mechanic Company Logo" class="aboutus-logo" />
    </div>
    <div class="content-container">
      <p class="intro-text">
        <strong>We are Mechanic Company </strong>, where we solve your challenges with
        <span class="text-primary">honesty, trust, and reliability</span>. We are dedicated to providing top-notch services, ensuring your complete satisfaction and fostering lasting relationships.
      </p>
      <h3 class="fancy-heading">Why Choose Us?</h3>
      <div class="fancy-list-container">
        <ul class="fancy-list">
          <li>
            <i class="fas fa-check-circle"></i>
            <div>
              <strong>Honesty:</strong> Transparent service with no hidden costs.
            </div>
          </li>
          <li>
            <i class="fas fa-check-circle"></i>
            <div>
              <strong>Trust:</strong> Our expertise is the foundation of our client relationships.
            </div>
          </li>
          <li>
            <i class="fas fa-check-circle"></i>
            <div>
              <strong>Reliability:</strong> Consistent quality work, every time.
            </div>
          </li>
        </ul>
      </div>
      <h3 class="fancy-heading">Our Commitment</h3>
      <p class="commitment-text">
        Our team is passionate about delivering innovative solutions that make a real difference. From minor fixes to major projects, we handle every task with professionalism and care. Your trust inspires us to continually exceed expectations.
      </p>
      <div class="content-container">
        <h3>Contact Us</h3>
        <p class="contact-details">
          <i class="fas fa-map-marker-alt"></i>
          Visit us at <strong>139, Mumbai Agra Road, Jaulke Phata, Near Ozar Nashik 422207</strong>
        </p>
        <p class="contact-details">
          <a href="tel:+918411971971" class="phone-link">
            <i class="fas fa-phone-alt"></i>
            +91 8411971971
          </a>
        </p>
        <p class="contact-details">
          <a href="https://wa.me/918411971971?text=Hi" target="_blank" class="whatsapp-link">
            <i class="fab fa-whatsapp"></i>
            Chat with us on WhatsApp
          </a>
        </p>
        <p class="contact-details">
          <i class="fas fa-envelope"></i>
          Email: <strong>info@cskindia.com</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
/* Container styling with subtle gradient and shadow */
.about-container {
  animation: fadeIn 1s ease-in-out;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin: 2rem auto;
  max-width: 1100px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
}

/* Back link styling */
.back-icon {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #c0392b;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  transition: color 0.3s ease;
}

.back-icon:hover {
  color: #2980b9;
}

/* Section title styling */
.section-title {
  text-align: center;
  margin-bottom: 1.8rem;
  font-size: 2.2rem;
  color: #2c3e50;
  font-weight: 600;
}

/* Logo container and image styling */
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.aboutus-logo {
  max-width: 200px;
  width: 100%;
  border-radius: 12%;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.aboutus-logo:hover {
  transform: scale(1.08);
}

/* Content container styling */
.content-container {
  text-align: left;
  padding: 0 1rem;
}

.intro-text,
.commitment-text {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
}

/* Highlight primary text */
.text-primary {
  color: #2980b9;
  font-weight: 500;
}

/* Fancy headings with underline */
.fancy-heading {
  position: relative;
  display: inline-block;
  margin: 2rem 0 1.2rem;
  padding-bottom: 0.3rem;
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 500;
}

.fancy-heading::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 50%;
  height: 3px;
  background-color: #2980b9;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* Fancy list styling */
.fancy-list-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.fancy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.fancy-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
  color: #2c3e50;
}

.fancy-list li i {
  color: #2980b9;
  margin-right: 0.6rem;
  font-size: 1.5rem;
}

.fancy-list li div {
  text-align: left;
}

/* Contact section styling */
.contact-section {
  background-color: #fdfdfd;
  padding: 0.3rem;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
}

.contact-section h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: #2c3e50;
}

.contact-details {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #555;
  margin: 0.5rem 0;
}

.contact-details i {
  color: #2980b9;
  margin-right: 0.5rem;
  font-size: 1.3rem;
}

.phone-link,
.whatsapp-link {
  text-decoration: none;
  color: #2980b9;
  transition: color 0.3s ease;
}

.phone-link:hover,
.whatsapp-link:hover {
  color: #1c5980;
}

/* FadeIn animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .fancy-list-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .fancy-list {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
  .fancy-list li {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .fancy-list li i {
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
  .about-container {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>
