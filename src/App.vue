<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Login from "./views/auth/Login.vue";
import HomeViews from "./views/HomeViews.vue";
</script>

<template>
  <Navbar />
  <RouterView/>
  <Footer/>
</template>

<style scoped></style>
