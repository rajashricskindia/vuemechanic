<!-- filepath: /Users/sandipkurwale/Documents/VueMechanic/mechaniccompany/src/views/Home.vue -->
<template>
  <div class="home">
    <div class="premium-heading">
      <i class="fas fa-crown"></i>
      <h1>Our Premium Services</h1>
      <i class="fas fa-crown"></i>
    </div>
    <p>Your one-stop solution for quality Implements, Spares, Used Tractors, and Exclusive Service Support.</p>
    <div class="services-overview">
      <router-link to="/implements" class="service-card">
        <h3>Attachments (Implements)</h3>
        <p>Explore our range of high-quality implements.</p>
      </router-link>
      <router-link to="/spares" class="service-card">
        <h3>Spares</h3>
        <p>Reliable spares to ensure your machines operate smoothly and efficiently.</p>
      </router-link>
      <router-link to="/usedtractors" class="service-card">
        <h3>Used Tractors</h3>
        <p>Find quality used tractors at competitive prices.</p>
      </router-link>
      <router-link to="/mechanicsupport" class="service-card">
        <h3>Mechanic Support</h3>
        <p>Expert support to service your tractor at your doorstep.</p>
      </router-link>
      <router-link to="/mechanicsupport" class="service-card">
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
.home {
  text-align: center;
}

.premium-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.premium-heading i {
  color: gold;
  font-size: 1.5rem;
}

.services-overview {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.service-card {
  background-color: #f2f2f2;
  border: 2px solid red;
  padding: 1rem;
  width: 200px;
  text-decoration: none;
  color: #333;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .services-overview {
    flex-direction: column;
    align-items: center;
  }
}
</style>