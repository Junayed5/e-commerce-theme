<template>
    <nav class="bg-white border-b">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <!-- Logo -->
        <div class="text-2xl font-bold flex items-center">
          <span class="bg-black text-white px-2 py-1">Dorji</span>
          <span class="ml-1">bari™</span>
        </div>
  
        <!-- Search and Icons -->
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
            <a href="#" class="text-gray-600">Sign In</a>
          </div>
        </div>
      </div>
  
      <!-- Navbar Links -->
      <div class="bg-black text-white py-3">
        <div class="container mx-auto flex justify-center space-x-6 text-sm font-semibold">
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
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  /* Optional additional styles */
  </style>
  