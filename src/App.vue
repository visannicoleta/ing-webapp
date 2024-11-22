<template>
  <div id="app">
    <main-navigation></main-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue';

export default {
  name: 'App',
  components: {
    MainNavigation,
  },
};
</script>