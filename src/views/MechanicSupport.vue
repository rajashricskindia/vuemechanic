<template>
  <div class="detail-container">
    <router-link to="/" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Home
    </router-link>
    <h1 class="product-title">Service Expert at your Doorstep</h1>
    <div v-if="loading" class="loading">Loading product details...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <div v-else>
      <div class="content-container">
        <!-- Form Section -->
        <div class="form-container">
          <!-- Tractor Make Dropdown -->
          <div class="form-group">
            <label for="tractorMake" class="form-label">Your Tractor Company</label>
            <select id="tractorMake" v-model="selectedTractorMake" class="form-control">
              <option value="Mahindra">Mahindra</option>
              <option value="Massey Ferguson">Massey Ferguson</option>
              <option value="Sonalika">Sonalika</option>
              <option value="Swaraj">Swaraj</option>
              <option value="John Deere">John Deere</option>
              <option value="New Holland">New Holland</option>
              <option value="Eicher">Eicher</option>
              <option value="Force">Force</option>
              <option value="Farmtrac">Farmtrac</option>
              <option value="Powertrac">Powertrac</option>
              <option value="Escorts">Escorts</option>
              <option value="Kubota">Kubota</option>
              <option value="Indo Farm">Indo Farm</option>
              <option value="Preet">Preet</option>
              <option value="Captain">Captain</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <!-- Tractor Model Text Input -->
          <div class="form-group">
            <label for="tractorModel" class="form-label">Your Tractor Model</label>
            <input
              type="text"
              id="tractorModel"
              v-model="tractorModel"
              class="form-control"
              placeholder="Enter Tractor Model"
              maxlength="50"
            />
          </div>

          <!-- Variant Selection Dropdown -->
          <div class="form-group">
            <label for="variantSelect" class="form-label">When do you want him</label>
            <select id="variantSelect" v-model="selectedVariant" class="form-control">
              <option
                v-for="variant in variants"
                :key="variant.variant"
                :value="variant.variant"
              >
                {{ variant.variant }}
              </option>
            </select>
          </div>
        </div>

        <!-- Display Current Variant Details -->
        <div class="product-info">
          <img
            :src="currentVariant.productImage"
            :alt="currentVariant.name"
            class="product-image"
          />
          <div class="product-details">
            <p class="product-price">
              <strong>Service Base Price:</strong> ₹{{ currentVariant.price }}
            </p>
            <div class="enquiry-section">
              <button class="enquiry-button" @click="handleEnquiry">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div><!-- .content-container -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default {
  name: 'MechanicSupport',
  data() {
    return {
      variants: [],
      loading: true,
      error: null,
      selectedVariant: null,
      selectedTractorMake: 'Mahindra', // default tractor make
      tractorModel: '', // tractor model input
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
      const productId = 115;
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
        console.error('Error fetching details:', err);
        this.error =
          (err.response && err.response.data) ||
          err.message ||
          'Failed to load details.';
      } finally {
        this.loading = false;
      }
    },
    handleEnquiry() {
      // Consolidate selectedTractorMake and tractorModel into a single description string
      const description = `Make: ${this.selectedTractorMake}, Model: ${this.tractorModel} , Service: ${this.currentVariant.variant} `;
      
      // Create a new object combining current variant details with the consolidated description
      const selectedVariant = {
        id: this.currentVariant.id,
        name: this.currentVariant.name,
        price: this.currentVariant.price,
        brandName: description,
        variant: this.currentVariant.variant,
        details: description
      };
      console.log('Selected Variant:', selectedVariant);
      console.log('Selected Tractor Make:', this.selectedTractorMake);
      
      // Pass the updated variant details to the PlaceEnquiry route
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
/* Container and general layout */
.detail-container {
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  min-height: 100vh;
  max-width: 1200px;
  margin: 2rem auto;
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Back icon */
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

/* Title */
.product-title {
  font-size: 2.4rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

/* Loading and error messages */
.loading,
.error {
  font-size: 1.2rem;
  color: #7f8c8d;
  text-align: center;
  margin: 2rem 0;
}

/* Flex container for form and product info */
.content-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
}

/* Form container */
.form-container {
  background: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  flex: 1;
  max-width: 500px;
  justify-content: center;
  border: 1x solid #ea1452;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-label {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: block;
}

.form-control {
  width: 100%;
  max-width: 250px; /* Limits the width on larger screens */
  padding: 0.6rem 0.1rem;
  font-size: 1rem;
  border: 1px solid #555;
  border-radius: 6px;
  box-sizing: border-box;
  margin: 0 auto;
}

.form-control:focus {
  border-color: #ea1452;
  outline: none;
}

/* Product Info */
.product-info {
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.1rem;
}

.product-image {
  max-width: 300px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.product-details {
  font-size: 1.1rem;
  color: #555;
  text-align: left;
  width: 100%;
}

.product-price {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Enquiry Button */
.enquiry-section {
  text-align: center;
  margin-top: 1rem;
}

.enquiry-button {
  background-color: #ea1452;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.enquiry-button:hover {
  background-color: black;
}

@media (max-width: 768px) {
  .detail-container {
    padding: 0.5rem; /* Increased padding for small screens */
  }
  .product-title {
    font-size: 1.0rem;
  }
  .content-container {
    flex-direction: column;
    align-items: center;
  }
  .form-container,
  .product-info {
    max-width: 100%; /* Allow sections to use full width */
  }
  .product-details {
    text-align: center;
  }
}
</style>
