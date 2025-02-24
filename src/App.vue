<template>
  <div id="app">
    <header>
      <div class="header-container">
        <!-- <h1 class="logo">We Are Mechanic Company</h1> -->
        <div class="menu-icon" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <nav>
          <ul :class="{ 'nav-active': isMenuActive }">
            <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
            <li><router-link to="/implements" @click="toggleMenu">Implements</router-link></li>
            <li><router-link to="/spares" @click="toggleMenu">Spares</router-link></li>
            <li><router-link to="/usedtractors" @click="toggleMenu">Used Tractors</router-link></li>
            <li><router-link to="/mechanicsupport" @click="toggleMenu">Mechanic Support</router-link></li>
            <li><router-link to="/aboutus" @click="toggleMenu">About Us</router-link></li>
            <li><router-link to="/contactus" @click="toggleMenu">Contact Us</router-link></li>
            <li><router-link to="/mechanicsupport" @click="toggleMenu">Other Services</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-links">
          <router-link to="/aboutus" class="footer-link">About Us</router-link>
          <router-link to="/contactus" class="footer-link">Contact Us</router-link>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" class="social-icon">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <p class="copyright">
        &copy; 2025 PlanetCSK India Pvt. Ltd. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
}
</script>

<style scoped>
/* Overall container layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styling with gradient background */
header {
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: #fff;
  padding: 1rem 2rem;
  position: relative;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

/* Navigation styling */
nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background 0.3s ease;
}

nav ul li a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Mobile menu icon */
.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 4px 0;
  transition: all 0.4s;
}

/* Responsive navigation adjustments */
@media (max-width: 768px) {
  .menu-icon {
    display: flex;
  }
  
  nav {
    width: 100%;
  }
  
  nav ul {
    flex-direction: column;
    align-items: center;
    display: none;
    background: #2c3e50;
    width: 100%;
    margin-top: 1rem;
    padding: 1rem 0;
  }
  
  nav ul.nav-active {
    display: flex;
  }
  
  nav ul li {
    width: 100%;
    text-align: center;
    margin: 0.5rem 0;
  }
}

/* Main content styling */
main {
  flex: 1;
  padding: 2rem;
  background: #ecf0f1;
}

/* Footer styling */
footer {
  background: #2c3e50;
  color: #fff;
  padding: 1.5rem 2rem;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: text-decoration 0.3s;
}

.footer-link:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #e91e63;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
}

/* Responsive footer adjustments */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
