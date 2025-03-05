<template>
  <div class="place-enquiry">
    <router-link to="/" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Home
    </router-link>
    <h2>Place an Enquiry</h2>
    <!-- Display error message if exists -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <!-- Display success message if exists -->
    <div v-if="successMessage" class="success-message">
      <i class="fas fa-check-circle" style="color: green; margin-right: 8px;"></i>  {{ successMessage }}
    </div>
    <div class="enquiry-details" v-if="selectedVariant && Object.keys(selectedVariant).length">
      <p><strong>Enquiry For:</strong> {{ selectedVariant.name }}</p>
      <p><strong>Description:</strong> {{ selectedVariant.details }}</p>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Your Name"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <label for="mobile">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          v-model="form.mobile"
          placeholder="Your Mobile Number"
          class="input-field"
          required
          maxlength="10"
          @input="onlyNumbers"
        />
      </div>
      <div class="form-group">
        <label for="district">District</label>
        <input
          type="text"
          id="district"
          v-model="form.district"
          placeholder="Your District"
          class="input-field"
          required
        />
      </div>
      <button type="submit" class="btn-submit" :disabled="isSubmitting">
        Submit Enquiry
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '@/config';

export default {
  name: 'PlaceEnquiry',
  data() {
    return {
      form: {
        name: '',
        mobile: '',
        district: ''
      },
      selectedVariant: {},
      errorMessage: '',
      successMessage: '',
      isSubmitting: false
    };
  },
  created() {
    // Retrieve and parse the selectedVariant object from the route parameters.
    if (this.$route.params.selectedVariant) {
      try {
        this.selectedVariant = JSON.parse(this.$route.params.selectedVariant);
      } catch (error) {
        console.error('Error parsing selectedVariant:', error);
      }
    }
  },
  methods: {
    onlyNumbers(event) {
      // Remove any non-digit characters and limit to 10 digits
      const cleanedValue = event.target.value.replace(/\D/g, '').slice(0, 10);
      this.form.mobile = cleanedValue;
    },
    async handleSubmit() {
      // Disable the button immediately to prevent multiple submissions.
      this.isSubmitting = true;
      // Clear any previous messages.
      this.errorMessage = '';
      this.successMessage = '';

      // Validate that all fields are filled.
      if (!this.form.name.trim()) {
        this.errorMessage = 'Please enter your name.';
        this.isSubmitting = false;
        return;
      }
      if (!this.form.mobile.trim()) {
        this.errorMessage = 'Please enter your mobile number.';
        this.isSubmitting = false;
        return;
      }
      if (this.form.mobile.length !== 10) {
        this.errorMessage = 'Mobile number must be exactly 10 digits.';
        this.isSubmitting = false;
        return;
      }
      if (!this.form.district.trim()) {
        this.errorMessage = 'Please enter your district.';
        this.isSubmitting = false;
        return;
      }

      // Combine all the form fields and the selected variant into one object.
      const enquiryData = {
        productId: this.selectedVariant.id,
        name: this.selectedVariant.name,
        variant: this.selectedVariant.variant,
        // Ensure you use the correct casing for brandName.
        brandname: this.selectedVariant.brandName,
        description: this.selectedVariant.details,
        isspare: this.selectedVariant.isspare,
        customername: this.form.name,
        mobileno: this.form.mobile,
        district: this.form.district
      };

      console.log('Enquiry submitted:', enquiryData);
      
      // Post the enquiry data to the endpoint.
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/products/postmc`,
          enquiryData
        );
        console.log('Response from API:', response.data);
        // Show success message.
        this.successMessage = "Thank you for placing an enquiry, Our team will reach out to you shortly ...!";
        // Navigate back to the home page after a short delay (e.g., 10 seconds).
        setTimeout(() => {
          this.$router.push('/');
        }, 10000);
      } catch (error) {
        console.error('Error submitting enquiry:', error);
        this.errorMessage = "Sorry, something went wrong while submitting your enquiry. Please try again later.";
        // Re-enable the button if there's an error.
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
.place-enquiry {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--bg-color, #ffffff);
  border-radius: 8px;
  box-shadow: var(--box-shadow, 0 2px 8px rgba(0, 0, 0, 0.1));
}

.place-enquiry h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--primary-color, #333);
}

.error-message {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  text-align: center;
}

.success-message {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.enquiry-details {
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--text-color, #555);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color, #555);
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 4px;
  font-size: 1rem;
  background: var(--input-bg, #f9f9f9);
}

.btn-submit {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-color, #ea1452);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.btn-submit:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn-submit:hover:not(:disabled) {
  background-color: var(--primary-color-hover, black);
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
</style>
