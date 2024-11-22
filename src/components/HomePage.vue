<template>
  <div class="home-page">
    <h2>Welcome to ING Bank</h2>
    <p>{{ ingContent }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingContent: this.getIngContent(),
    };
  },

  methods: {
    getIngContent() {
      return `
        ING is a leading European bank with over 60,000 employees serving more than 38 million customers in over 40 countries. Our purpose is to empower people to stay a step ahead in life and in business. We offer a wide range of products including savings, payments, investments, loans, and mortgages. Our commitment to sustainability and innovation drives us to provide exemplary service and support a better world.
      `;
    },
  },
};
</script>

<style scoped>
.home-page {
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  text-align: center;
}

h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #555;
}

nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
