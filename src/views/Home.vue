<template>
  <div class="home">
    <div class="premium-heading">
      <i class="fas fa-crown"></i>
      <h2>Our Premium Services</h2>
      <i class="fas fa-crown"></i>
    </div>
    <p class="tagline">
      Your one-stop solution for quality Implements, Spares, Used Tractors, and Exclusive Service Support.
    </p>
    <div class="services-overview">
      <router-link to="/implements" class="service-card">
        <i class="fas fa-tools"></i>
        <h3>Attachments (Implements)</h3>
        <p>Explore our range of high-quality implements.</p>
      </router-link>
      <router-link to="/spares" class="service-card">
        <i class="fas fa-cogs"></i>
        <h3>Spares</h3>
        <p>Reliable spares to keep your machinery running smoothly.</p>
      </router-link>
      <router-link to="/usedtractors" class="service-card">
        <i class="fas fa-tractor"></i>
        <h3>Used Tractors</h3>
        <p>Find quality used tractors at competitive prices.</p>
      </router-link>
      <router-link to="/mechanicsupport" class="service-card">
        <i class="fas fa-user-cog"></i>
        <h3>Mechanic Support</h3>
        <p>Expert support to service your tractor at your doorstep.</p>
      </router-link>
      <router-link to="/mechanicsupport" class="service-card">
        <i class="fas fa-concierge-bell"></i>
        <h3>Other Services</h3>
        <p>Other Agri Mechanization Linked Services.</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Overall container with gradient background */
.home {
  text-align: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Premium heading with animated crown icons */
.premium-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  /* Prevent wrapping on all screen sizes */
  flex-wrap: nowrap;
}

.premium-heading i {
  color: red; /* Gold color for crowns */
  font-size: 3rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.premium-heading h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Tagline styling */
.tagline {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
  max-width: 800px;
}

/* Service cards container */
.services-overview {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Individual service card styling */
.service-card {
  background-color: #ffffff;
  border: 2px solid red;
  padding: 2.5rem;
  width: 320px;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card i {
  font-size: 2.5rem;
  color: #2980b9;
  margin-bottom: 0.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  text-transform: uppercase;
}

.service-card p {
  font-size: 1rem;
  color: #7f8c8d;
  text-align: center;
}

.service-card:hover {
  transform: scale(1.07);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-overview {
    flex-direction: column;
    align-items: center;
  }
  
  /* Optionally reduce font size and gap on smaller screens */
  .premium-heading {
    gap: 0.5rem;
    font-size: 2rem;
  }
}
</style>
