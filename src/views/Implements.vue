<template>
  <div class="service">
    <router-link to="/" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Home
    </router-link>
    <h1 class="section-title">Attachments (Implements)</h1>
    <h3 class="sub-title">
      We offer a wide range of quality &amp; robust implements designed to boost the efficiency and productivity of your tractor for superior cultivation.
    </h3>
    <div class="products">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="{ name: 'ImplementDetails', params: { productId: product.id } }"
        class="product-card"
      >
        <img :src="product.productImage" :alt="product.name" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <p class="price">Price Range: {{ product.price }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default {
  name: 'Implements',
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/allproducts/getall`);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Main container with a subtle gradient background */
.service {
  text-align: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  min-height: 100vh;
}

/* Back icon styling with hover effects */
.back-icon {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #c0392b;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
}

.back-icon i {
  margin-right: 0.5rem;
}

.back-icon:hover {
  color: #2980b9;
}

/* Section title and subtitle styling */
.section-title {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.sub-title {
  font-size: 1.2rem;
  color: #2c3e50;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

/* Products grid */
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

/* Product card styling */
/* Note: The .product-card styles now apply to the router-link container */
.product-card {
  background-color: #ffffff;
  border: 2px solid #2980b9;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-decoration: none;
  color: #2c3e50;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Product image styling */
.product-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

/* Product name, description, and price */
.product-name {
  font-size: 1.5rem;
  margin: 1rem;
  color: #2c3e50;
}

.product-description {
  margin: 0 1rem 1rem;
  color: #7f8c8d;
  font-size: 1rem;
}

.price {
  font-weight: bold;
  color: #e91e63;
  margin: 0 1rem 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .products {
    flex-direction: column;
    align-items: center;
  }
  .product-card {
    width: 90%;
  }
}
</style>
