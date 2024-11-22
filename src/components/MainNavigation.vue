<template>
  <div>
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><router-link to="/home" :class="{ selected: selectedLink === 'home' }" @click="selectLink('home')">
            <font-awesome-icon icon="home" />
            <span>Home</span>
          </router-link></li>
          <li><router-link to="/contact" :class="{ selected: selectedLink === 'contact' }" @click="selectLink('contact')">
            <font-awesome-icon icon="envelope" />
            <span>Contact</span>
          </router-link></li>
          <li><router-link to="/" :class="{ selected: selectedLink === 'login' }" @click="selectLink('login')">
            <font-awesome-icon icon="sign-in-alt" />
            <span>My account</span>
          </router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainNavigation',
  computed: {
    ...mapState(['selectedLink']),
  },
  methods: {
    ...mapActions(['updateSelectedLink']),
    selectLink(link) {
      this.updateSelectedLink(link);
    },
  },
};
</script>

<style scoped>
:host {
  display: block;
  background-color: #f0f0f0;
  color: #333;
  border-bottom: 2px solid #ff6600; /* Orange border */
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Modern shadow effect */
}
.logo img {
  height: 150px; /* Adjust as needed */
  width: auto;
}
nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav {
  display: flex;
  flex-direction: column;
}
nav a {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
nav a:hover {
  background-color: #e2e6ea;
}
nav a.selected {
  background-color: #007bff;
  color: #fff;
}
nav a font-awesome-icon {
  margin-right: 8px;
}
nav a span {
  margin-left: 8px;
}
@media (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }
  nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }
  nav {
    flex-direction: row;
    justify-content: space-around;
  }
  nav a {
    margin-bottom: 0;
  }
}
</style>
