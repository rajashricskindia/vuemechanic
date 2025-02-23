<!-- filepath: /Users/sandipkurwale/Documents/VueMechanic/mechaniccompany/src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>We Are Mechanic Company</h1>
      <!-- <nav>
        <div class="menu-icon" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul :class="{ 'nav-active': isMenuActive }">
          <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
          <li><router-link to="/Implements" @click="toggleMenu">Implements</router-link></li>
          <li><router-link to="/Spares" @click="toggleMenu">Spares</router-link></li>
          <li><router-link to="/UsedTractors" @click="toggleMenu">Used Tractors</router-link></li>
          <li><router-link to="/MechanicSupport" @click="toggleMenu">Mechanic Support</router-link></li>
        </ul>
      </nav> -->
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="footer-content">
        <router-link to="/AboutUs" class="footer-link">About Us</router-link>
        <router-link to="/ContactUs" class="footer-link">Contact Us</router-link>
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
      <p>&copy; 2025 PlancetCSK India Pvt. Ltd. All rights reserved.</p>
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
/* Container layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styling */
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: relative;
}

header h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

/* Navigation styling */
nav {
  position: relative;
}

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.menu-icon .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 4px 0;
  transition: 0.4s;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

nav ul.nav-active {
  display: block;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

nav ul li a:hover {
  background-color: #555;
  color: #fff;
}

/* Main content styling */
main {
  flex: 1;
  padding: 1rem;
}

/* Footer styling */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
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
  text-decoration: none;
}

.social-icon:hover {
  color: #e91e63;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .menu-icon {
    display: flex;
  }

  nav ul {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #333;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem 0;
  }

  nav ul.nav-active {
    display: flex;
  }

  nav ul li a {
    font-size: 1rem;
    padding: 0.5rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>