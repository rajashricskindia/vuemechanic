<!-- filepath: /Users/sandipkurwale/Documents/VueMechanic/mechaniccompany/src/views/AboutUs.vue -->
<template>
  <div class="about-container">
    <router-link to="/" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Home
    </router-link>
    <h2 class="section-title">Contact Us</h2>
    <div class="logo-container">
      <img src="assets/logo.png" alt="Mechanic Company Logo" class="aboutus-logo" />
    </div>
    <div class="content-container">
       
      <div class="contact-section">
        <h3>Contact Us</h3>
        <p>
          <i class="fas fa-map-marker-alt"></i>
          Visit us at <strong>139, Mumbai Agra Road, Jaulke Phata, Near Ozar Nashik 422207</strong><br>
          <a href="tel:+918411971971" class="phone-link">
            <i class="fas fa-phone-alt"></i>
            Call us: <strong>+91 8411971971</strong><br>
          </a>
          <a href="https://wa.me/918411971971?text=Hi" target="_blank" class="whatsapp-link">
            <i class="fab fa-whatsapp" style="color: green;"></i>
            Chat with us on WhatsApp
          </a>
        </p>
        <p>
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
.about-container {
  animation: fadeIn 1s ease-in-out;
  background: linear-gradient(135deg, #ffffff, #f2f2f2);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 1100px;
}

.back-icon {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.back-icon:hover {
  color: #007bff;
}

.section-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.aboutus-logo {
  max-width: 200px;
  width: 100%;
  border-radius: 10%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.aboutus-logo:hover {
  transform: scale(1.1);
}

.content-container {
  text-align: center;
}

.intro-text,
.commitment-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.text-primary {
  color: #007bff;
}

.fancy-heading {
  position: relative;
  display: inline-block;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
  color: #333;
}

.fancy-heading::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 50%;
  height: 3px;
  background-color: #007bff;
  transform: translateX(-50%);
}

.fancy-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.fancy-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: #333;
}

.fancy-list li i {
  color: #007bff;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.contact-section {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
}

.contact-section h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
}

.contact-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

.contact-section i {
  color: #007bff;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

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
  .about-container {
    padding: 1.5rem;
  }
  .section-title {
    font-size: 1.75rem;
  }
  .intro-text,
  .commitment-text,
  .contact-section p {
    font-size: 1rem;
  }
}
</style>