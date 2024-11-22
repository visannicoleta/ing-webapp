<template>
  <div class="login-page">
    <h2>Login</h2>
    <lion-form @form-submit="handleLogin">
      <simple-input
        class="form-control"
        name="username"
        label="Username"
        .modelValue="username"
        @model-value-changed="(e) => (username = e.target.value)"
      ></simple-input>
      <simple-input
        class="form-control"
        type="password"
        name="password"
        label="Password"
        .modelValue="password"
        @model-value-changed="(e) => (password = e.target.value)"
      ></simple-input>
      <simple-button class="btn" @click="handleLogin">Login</simple-button>
    </lion-form>
    <p
      v-if="message"
      :class="{ 'error-message': !isSuccess, 'success-message': isSuccess }"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import "../lion-elements/SimpleButton.js";
import "../lion-elements/SimpleInput.js";
import "@lion/ui/form";
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: "",
      password: "",
      users: [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
        { username: "user3", password: "pass3" },
      ],
      message: "",
      isSuccess: false,
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    ...mapActions(['updateSelectedLink']),
    handleLogin() {
      if (this.userExists(this.username, this.password)) {
        this.message = 'Login successful';
        this.isSuccess = true;
        this.updateSelectedLink('home'); // Update selected link
        this.$router.push('/home');
      } else {
        this.message = 'Invalid username or password';
        this.isSuccess = false;
      }
    },
    userExists(username, password) {
      return this.users.some(
        (user) => user.username === username && user.password === password
      );
    },
  },
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.form-control {
  margin-bottom: 15px;
}

.simple-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.simple-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
.btn {
  width: 100%;
  background-color: #0a5cb3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.btn:hover {
  background-color: #007bff;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 10px;
}
</style>