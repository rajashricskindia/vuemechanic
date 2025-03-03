<template>
  <div class="detail-container">
    <router-link to="/UsedTractors" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Used Tractors Home
    </router-link>
    
    <!-- Only show title if there is at least one variant -->
    <h1 class="product-title" v-if="variants.length > 0">{{ currentVariant.name }}</h1>
    
    <div v-if="loading" class="loading">Loading product details...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <div v-else>
      <!-- Check if there are any variants available -->
      <div v-if="variants.length === 0" class="sold-out-message">
        <label class="form-label">Currently all available models are sold out.</label>
      <p></p>
        <label class="form-label">Keep checking here...once tractor is available, we will show it here .. .</label>
      </div>
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
              <strong>Offer Price:</strong> ₹{{ currentVariant.price }}
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
      </div> <!-- end variant available check -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default {
  name: 'UsedTractorDetails',
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
          `${API_BASE_URL}/api/products/getvariants?productId=${productId}`
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
      const selectedVariant = this.currentVariant;
      selectedVariant.details = this.currentVariant.variant;
      console.log('Selected Variant:', selectedVariant);
      this.$router.push({
        name: 'PlaceEnquiry',
        params: { 
          selectedVariant: JSON.stringify(selectedVariant)
        }
      });
    },
  },
};
</script>

<style scoped>
.detail-container {
  padding: 2.5rem;
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

/* Updated dropdown styles */
.variant-dropdown {
  font-size: 1.1rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid #2980b9;
  border-radius: 4px;
  outline: none;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.variant-label {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-right: 0.5rem;
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
  margin-bottom: 2rem;
}

.product-image {
  max-width: 500px;
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
  background-color: #ea1452;
  color: #fff;
  border: none;
  padding: 0.8rem 1.6rem;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.enquiry-button:hover {
  background-color: black;
}

/* Sold-out message style */
.sold-out-message {
  background: #f1f8ff;
  border: 1px solid #a3c0e9;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
}
.sold-out-message .form-label {
  font-weight: bold;
  color: #2980b9;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .detail-container {
    padding: 1rem;
  }
  .product-info {
    flex-direction: column;
  }
  .product-details {
    text-align: center;
  }
  .reviews-section {
    text-align: center;
  }
  .variant-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .variant-label {
    margin-bottom: 1rem;
    margin-right: 0;
  }
  .variant-dropdown {
    width: 100%;
    max-width: 300px;
  }
}
</style>
