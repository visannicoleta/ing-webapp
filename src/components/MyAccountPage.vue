<template>
  <div class="myaccount">
    <h1>Welcome, {{ user.username }}</h1>
    <p>This is your account page.</p>
    <simple-button @click="logout">Logout</simple-button>
  </div>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MyAccountPage",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["logoutUser", "updateSelectedLink"]),
    logout() {
      this.logoutUser();
      this.$router.push("/");
      this.updateSelectedLink("");
    },
  },
  mounted() {
    this.updateSelectedLink("myaccount"); // Set selected link to "My account"
  },
};
</script>
  <style scoped>
.myaccount {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  text-align: center;
}
</style>