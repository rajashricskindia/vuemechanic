<!-- src/views/Spares.vue -->
<template>
  <div class="spares-container">
    <h2>Spares Catalog</h2>
    <p>
      Our extensive inventory of spares ensures that your equipment stays in top shape with minimal downtime.
      <br />
      <strong>We're launching our spares catalog soon!</strong>
    </p>
    <div class="coming-soon">
      <i class="fas fa-cogs"></i>
      <span>Coming Soon</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spares'
}
</script>

<style scoped>
.spares-container {
  text-align: center;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 8px;
  max-width: 800px;
  margin: 2rem auto;
}

.spares-container h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.spares-container p {
  font-size: 1.2rem;
  color: black;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.coming-soon {
  font-size: 1.5rem;
  color: #e74c3c;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px dashed #e74c3c;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.3s ease;
}

.coming-soon:hover {
  transform: scale(1.05);
}

.coming-soon i {
  font-size: 2rem;
}
</style>
