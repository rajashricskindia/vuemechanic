<template>
  <div class="detail-container">
    <router-link to="/implements" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Implements
    </router-link>
    <h1 class="product-title">{{ currentVariant.name }}</h1>
    <div v-if="loading" class="loading">Loading product details...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <div v-else>
      <!-- Variant Selection Dropdown -->
      <div class="variant-selector">
        <label for="variantSelect" class="variant-label">Select Variant:</label>
        <select id="variantSelect" v-model="selectedVariant" class="variant-dropdown">
          <option v-for="variant in variants" :key="variant.variant" :value="variant.variant">
            {{ variant.variant }}
          </option>
        </select>
      </div>

      <!-- Display Current Variant Details -->
     
      <div class="product-info">
        <img
          :src="currentVariant.productImage"
          :alt="currentVariant.name"
          class="product-image"
        />
        <div class="product-details">
          <p class="product-variant">
            <strong>Variant:</strong> {{ currentVariant.variant }}
          </p>
          <p class="product-price">
            <strong>Price:</strong> ₹{{ currentVariant.price }}
          </p>
          <p class="product-description">{{ currentVariant.details }}</p>
           <!-- Enquiry Button -->
      <div class="enquiry-section">
        <button class="enquiry-button" @click="handleEnquiry">
          Enquiry
        </button>
      </div>


        </div>
             </div>

      

      <!-- Customer Reviews -->
      <div
        class="reviews-section"
        v-if="currentVariant.reviews && currentVariant.reviews.length"
      >
        <h2>Customer Reviews</h2>
        <div class="reviews-list">
          <div class="review-card" v-for="(review, index) in currentVariant.reviews" :key="index">
            <img
              :src="review.imageUrl"
              alt="Reviewer Image"
              class="reviewer-image"
            />
            <div class="review-content">
              <h4 class="reviewer-name">{{ review.name }}</h4>
              <p class="review-text">"{{ review.review }}"</p>
              <p class="review-rating">Rating: {{ review.rating }} / 5</p>
              <p class="review-date">{{ review.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default {
  name: 'ImplementDetails',
  data() {
    return {
      variants: [],
      loading: true,
      error: null,
      selectedVariant: null,
    };
  },
  computed: {
    // Return the variant that matches the selected variant string.
    currentVariant() {
      if (this.variants.length === 0) return {};
      return (
        this.variants.find(variant => variant.variant === this.selectedVariant) ||
        this.variants[0]
      );
    },
  },
  created() {
    this.fetchProductDetails();
  },
  methods: {
    async fetchProductDetails() {
      const productId = this.$route.params.productId;
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/allvariants/get?productId=${productId}`
        );
        this.variants = response.data;
        if (this.variants.length > 0) {
          // Initialize with the first variant's "variant" attribute.
          this.selectedVariant = this.variants[0].variant;
        }
      } catch (err) {
        console.error('Error fetching product details:', err);
        this.error =
          (err.response && err.response.data) ||
          err.message ||
          'Failed to load product details.';
      } finally {
        this.loading = false;
      }
    },
    handleEnquiry() {
      // Replace with your enquiry functionality.
      alert(`Enquiry for ${this.currentVariant.name} (Variant: ${this.currentVariant.variant})`);
    },
  },
};
</script>

<style scoped>
.detail-container {
  padding: 0.5rem;
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  min-height: 100vh;
  max-width: 1300px;
  margin: 1rem auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

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

.loading,
.error {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 2rem 0;
}

.variant-selector {
  margin-bottom: 1.5rem;
  text-align: center;
}

.variant-label {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-right: 0.5rem;
}

.variant-dropdown {
  font-size: 1.1rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid #2980b9;
  border-radius: 4px;
  outline: none;
}

.product-title {
  font-size: 2.2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
}

.product-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.product-image {
  max-width:500px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-details {
  max-width: 500px;
  text-align: left;
  font-size: 1.1rem;
  color: #555;
}

.product-variant,
.product-price,
.product-description {
  margin-bottom: 1rem;
  text-align: left;
}

.enquiry-section {
  text-align: center;
  margin-bottom: 2rem;
}

.enquiry-button {
  background-color: brown;
  color: #fff;
  border: none;
  padding: 0.8rem 1.6rem;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.enquiry-button:hover {
  background-color: #1c5980;
}

/* Reviews Section */
.reviews-section {
  margin-top: 2rem;
  text-align: left;
}

.reviews-section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reviewer-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.review-content {
  font-size: 0.95rem;
  color: #555;
}

.review-content h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #2c3e50;
}

.review-text {
  margin: 0;
  font-style: italic;
}

.review-rating,
.review-date {
  font-size: 0.85rem;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .product-info {
    flex-direction: column;
  }
  .product-details {
    text-align: center;
  }
  .reviews-section {
    text-align: center;
  }
}
</style>
