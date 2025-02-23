<!-- filepath: /Users/sandipkurwale/Documents/VueMechanic/mechaniccompany/src/views/Implements.vue -->
<template>
  <div class="service">
    <router-link to="/" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Home
    </router-link>
    <h1>Attachments (Implements)</h1>
    <h3>We offer a wide range of Quality & Robust implements designed to boost the efficiency and productivity of your tractor with superior cultivation .</h3>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.productImage" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">Price Range: {{ product.price }}</p>
      </div>
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
.service {
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;
}

.back-icon {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.back-icon i {
  margin-right: 0.5rem;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  background-color: #fff;
  border: 1px solid red;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: left;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-image {
  width: 100%;
  height: 350px; /* Reduced height */
  object-fit: cover;
}

.product-card h3 {
  font-size: 1.5rem;
  margin: 1rem;
  color: #333;
}

.product-card p {
  margin: 0 1rem 1rem;
  color: #666;
}

.price {
  font-weight: bold;
  color: #e91e63;
}
</style>