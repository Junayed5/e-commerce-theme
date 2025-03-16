<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
        <p class="text-center text-gray-500 mb-6">Welcome back! Please enter your details.</p>
  
        <form @submit.prevent="handleLogin">
          <!-- Email Input -->
          <div class="mb-4">
            <label class="block text-gray-700 font-medium">Email</label>
            <input type="email" v-model="email" placeholder="Enter your email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" required />
          </div>
  
          <!-- Password Input -->
          <div class="mb-4">
            <label class="block text-gray-700 font-medium">Password</label>
            <input type="password" v-model="password" placeholder="Enter your password"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" required />
          </div>
  
          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center text-gray-600">
              <input type="checkbox" v-model="rememberMe" class="mr-2">
              Remember Me
            </label>
            <a href="#" class="text-yellow-500 hover:text-yellow-600 text-sm">Forgot Password?</a>
          </div>
  
          <!-- Login Button -->
          <button type="submit"
            class="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
            Login
          </button>
        </form>
  
        <!-- Register Link -->
        <p class="mt-4 text-center text-gray-600">
          Don't have an account?
          <a href="#" class="text-yellow-500 font-medium hover:text-yellow-600">Sign Up</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        rememberMe: false,
      };
    },
    methods: {
      handleLogin() {
        console.log("Logging in with:", this.email, this.password);
        // Add login logic (API call, validation, etc.)
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Additional styling */
  </style>
  