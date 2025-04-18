<template>
  <div class="detail-container">
    <router-link to="/" class="back-icon">
      <i class="fas fa-arrow-left"></i> Back to Home
    </router-link>
    <p class="catchy">With our large inventory of spare parts, we’ll keep your equipment fully operational and always up and running.</p>
    <p class="catchy">We promise to always have the parts you need!</p>

    <div v-if="loading" class="loading">Loading Spare details...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <div v-else>
      <div class="content-container">
        <!-- Form Section -->
        <div class="form-container">
          <!-- Tractor Make Dropdown -->
          <div class="form-group">
            <label for="tractorMake" class="form-label">Your Tractor Company</label>
            <select id="tractorMake" v-model="selectedTractorMake" class="form-control">
              <option value="--Select--">--Select--</option>
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

          <!-- Spare Selection Input -->
          <div class="form-group">
            <label for="tractorSpare" class="form-label">Type Spare name you want (From below catalog)</label>
            <input
              type="text"
              id="tractorSpare"
              v-model="tractorSpare"
              class="form-control"
              placeholder="Enter Tractor Spare (From below catalog)"
              maxlength="50"
            />
          </div>

          <!-- Optional OIL Inclusion -->
          <div class="form-group">
            <label class="form-label" style="color: red;">
              <input type="checkbox" v-model="includeOil" /> <strong> Do you want OIL to make your machine smooth?</strong>
            </label>
          </div>

          <!-- OIL Variant Dropdown (conditionally shown) -->
          <div v-if="includeOil" class="oil-section">
            <label for="oilVariant" class="form-label">Select Oil Variant</label>
            <select id="oilVariant" v-model="selectedOilVariant" class="form-control">
              <option v-for="oil in oilVariants" :key="oil.variant" :value="oil.variant">
                {{ oil.variant }}
              </option>
            </select>
          </div>
        </div>

        <!-- Display Current Variant Details -->
        <div class="product-info">
          <img src="https://raw.githubusercontent.com/rajashricskindia/mcdata/refs/heads/main/Spares/sparesall.png" alt="Spare Parts" class="product-image" />
          <div class="product-details">
            <div class="enquiry-section">
              <button class="enquiry-button" @click="handleEnquiry">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div><!-- .content-container -->

      <!-- PDF Catalog Preview -->
      <div class="pdf-embed-section" v-if="selectedTractorMake !== '--Select--'">
        <h2>{{ selectedTractorMake }} Spare Parts Catalog</h2>
        <iframe
          v-if="pdfExists"
          :src="computedPdfUrl"
          width="100%"
          height="500px"
          class="pdf-frame"
        ></iframe>
        <div class="download-link">
          <a v-if="pdfExists" :href="computedPdfUrl" download class="custom-download-btn">📥 Download Catalog</a>
          <p v-else class="fallback-message">⚠️ Catalog not available for this brand.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default {
  name: 'Spares',
  data() {
    return {
      oilVariants: [],
      loading: true,
      error: null,
      selectedTractorMake: '--Select--',
      tractorModel: '',
      tractorSpare: '',
      includeOil: false,
      selectedOilVariant: null,
      pdfExists: true
    };
  },
  computed: {
    currentOilVariant() {
      if (this.oilVariants.length === 0) return {};
      return this.oilVariants.find(oil => oil.variant === this.selectedOilVariant) || this.oilVariants[0];
    },
    computedPdfUrl() {
      const fileName = this.selectedTractorMake.replace(/\s+/g, '_').toLowerCase() + '.pdf';
      return `/assets/catalogs/${fileName}`;
    }
  },
  watch: {
    selectedTractorMake(newVal) {
      if (newVal !== '--Select--') {
        this.checkFileExists(this.computedPdfUrl, 'pdfExists');
      }
    }
  },
  created() {
    this.fetchOilVariants();
  },
  methods: {
    async fetchOilVariants() {
      const productId = 108;
      try {
        const response = await axios.get(`${API_BASE_URL}/api/products/getvariants?productId=${productId}`);
        this.oilVariants = response.data;
        if (this.oilVariants.length > 0) {
          this.selectedOilVariant = this.oilVariants[0].variant;
        }
      } catch (err) {
        this.error = (err.response && err.response.data) || err.message || 'Failed to load oil variants.';
      } finally {
        this.loading = false;
      }
    },
    checkFileExists(url, stateKey) {
      fetch(url, { method: 'HEAD' })
        .then(res => {
          this[stateKey] = res.ok;
        })
        .catch(() => {
          this[stateKey] = false;
        });
    },
    handleEnquiry() {
      if (!this.tractorSpare.trim() && !this.includeOil) {
        alert('Please select at least a Spare Part or include OIL.');
        return;
      }
      let description = "";
      if (this.tractorSpare.trim() !== "") {
        description = `Make: ${this.selectedTractorMake}, Model: ${this.tractorModel}, Spare: ${this.tractorSpare}`;
      }
      if (this.includeOil && this.oilVariants.length > 0) {
        description = description 
          ? `${description}, OIL: ${this.currentOilVariant.variant}`
          : `OIL: ${this.currentOilVariant.variant}`;
      }
      const spareChosen = this.tractorSpare.trim() !== "";
      const oilChosen = this.includeOil && this.oilVariants.length > 0;
      let variantName = "";
      if (spareChosen && oilChosen) variantName = "Spares and OIL";
      else if (spareChosen) variantName = "Spares";
      else if (oilChosen) variantName = "OIL";
      const selectedVariant = {
        id: this.currentOilVariant.id,
        name: variantName,
        price: this.currentOilVariant.price,
        brandName: description,
        variant: this.currentOilVariant.variant,
        details: description,
        isspare: true
      };
      this.$router.push({
        name: 'PlaceEnquiry',
        params: { selectedVariant: JSON.stringify(selectedVariant) }
      });
    },
  }
};
</script>

<style scoped>
.detail-container {
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  min-height: 100vh;
  max-width: 1200px;
  margin: 2rem auto;
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
.catchy {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  color: #2c3e50;
  line-height: 1.5;
  margin: 1rem auto;
  max-width: 800px;
  position: relative;
  padding: 0.5rem 1rem;
}
.catchy::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #ea1452, #2980b9);
  margin: 10px auto 0;
  border-radius: 2px;
}
.loading,
.error {
  font-size: 1.2rem;
  color: #7f8c8d;
  text-align: center;
  margin: 2rem 0;
}
.content-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.form-container {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  flex: 1;
  max-width: 500px;
  border: 1px solid #ea1452;
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
  max-width: 250px;
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
.oil-section {
  background: #f1f8ff;
  border: 1px solid #a3c0e9;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
}
.oil-section .form-label {
  font-weight: bold;
  color: #2980b9;
}
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
.pdf-embed-section {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  border: 1px solid #ccc;
}
.pdf-frame {
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 500px;
}
.custom-download-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.4rem;
  background-color: #ea1452;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.custom-download-btn:hover {
  background-color: #000;
}
.fallback-message {
  margin-top: 1rem;
  color: #d35400;
  font-weight: bold;
}
@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }
  .form-container,
  .product-info {
    max-width: 100%;
  }
  .product-details {
    text-align: center;
  }
}
</style>

