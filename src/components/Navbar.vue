<template>
  <nav class="bg-white border-b">
    <!-- Top Section -->
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <RouterLink to="/"
        ><div class="text-2xl font-bold flex items-center">
          <span class="bg-black text-white px-2 py-1">Dorji</span>
          <span class="ml-1">bari™</span>
        </div></RouterLink
      >

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <a href="#" class="text-gray-600">Outlets</a>
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="border rounded-full px-4 py-1 pl-10 focus:outline-none"
          />
          <svg
            class="absolute left-3 top-2 w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1114.32 4.906l4.387 4.387a1 1 0 11-1.414 1.414l-4.387-4.387A8 8 0 010 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="relative text-gray-600">
            Shopping Cart
            <span
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1"
              >0</span
            >
          </a>
          <a href="#" class="text-gray-600">My Wish List</a>
          <RouterLink to="/login" class="text-gray-600">Sign In</RouterLink>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <!-- Navbar Links (Desktop) -->
    <div class="bg-black text-white py-3 hidden md:block">
      <div
        class="container mx-auto flex justify-center space-x-6 text-sm font-semibold"
      >
        <a href="#" class="hover:text-gray-300">HOME</a>
        <a href="#" class="hover:text-gray-300 flex items-center">
          EID COLLECTION 2025
          <span class="ml-1">🌙✨</span>
        </a>
        <a href="#" class="hover:text-gray-300">MEN TOP</a>
        <a href="#" class="hover:text-gray-300">MEN BOTTOM</a>
        <a href="#" class="hover:text-gray-300">OUTERWEAR</a>
        <a href="#" class="hover:text-gray-300">FRAGRANCE 20% OFF</a>
        <a href="#" class="hover:text-gray-300">ACCESSORIES</a>
        <a href="#" class="hover:text-gray-300">BIG SAVING</a>
        <a href="#" class="hover:text-gray-300">CONTACT US</a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-black text-white py-4 absolute top-16 left-0 w-full"
    >
      <div class="flex flex-col space-y-4 text-center">
        <a href="#" class="hover:text-gray-300">HOME</a>
        <a href="#" class="hover:text-gray-300">EID COLLECTION 2025 🌙✨</a>
        <a href="#" class="hover:text-gray-300">MEN TOP</a>
        <a href="#" class="hover:text-gray-300">MEN BOTTOM</a>
        <a href="#" class="hover:text-gray-300">OUTERWEAR</a>
        <a href="#" class="hover:text-gray-300">FRAGRANCE 20% OFF</a>
        <a href="#" class="hover:text-gray-300">ACCESSORIES</a>
        <a href="#" class="hover:text-gray-300">BIG SAVING</a>
        <a href="#" class="hover:text-gray-300">CONTACT US</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Smooth dropdown animation */
@media (max-width: 768px) {
  div[v-if="menuOpen"] {
    animation: fadeIn 0.3s ease-in-out;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
