<template>
  <!-- slider -->
  <div class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
    <!-- Slides -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0 relative bg-cover bg-center"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="relative flex flex-col items-center justify-center h-[500px] md:h-[600px] text-white text-center px-6"
        >
          <h1 class="text-3xl md:text-5xl font-bold">{{ slide.title }}</h1>
          <p class="mt-4 text-lg md:text-xl max-w-2xl">{{ slide.subtitle }}</p>
          <a
            href="#"
            class="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
    >
      ❮
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
    >
      ❯
    </button>

    <!-- Dots Indicator -->
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="index === currentSlide ? 'bg-yellow-400' : 'bg-gray-500'"
      ></span>
    </div>
  </div>
  <!-- slider -->
  <!--Category  -->
  <div class="w-3/5 mx-auto gap-7 my-10 grid grid-cols-1 md:grid-cols-4">
    <img
      class="transition duration-700 ease-in"
      src="https://dorjibari.com.bd/cdn/shop/files/Dorjibari___Panjabi_Image_500px_X_400px_1370x.png?v=1722687206"
      alt=""
    />
    <img
      src="https://dorjibari.com.bd/cdn/shop/files/Dorjibari___Panjabi_Image_500px_X_400px_1370x.png?v=1722687206"
      alt=""
    />
    <img
      src="https://dorjibari.com.bd/cdn/shop/files/Dorjibari___Panjabi_Image_500px_X_400px_1370x.png?v=1722687206"
      alt=""
    />
    <img
      src="https://dorjibari.com.bd/cdn/shop/files/Dorjibari___Panjabi_Image_500px_X_400px_1370x.png?v=1722687206"
      alt=""
    />
  </div>
  <!--Category  -->
</template>
<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: "https://source.unsplash.com/1600x900/?fashion,style",
          title: "Exclusive Eid Collection 2025",
          subtitle:
            "Discover the latest styles and trends with our new arrivals.",
        },
        {
          image: "https://source.unsplash.com/1600x900/?clothing,models",
          title: "Elevate Your Wardrobe",
          subtitle: "Unleash your style with our premium collections.",
        },
        {
          image: "https://source.unsplash.com/1600x900/?outfit,shopping",
          title: "Limited Time Offers",
          subtitle: "Get amazing discounts on selected items this season.",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    autoSlide() {
      setInterval(() => {
        this.nextSlide();
      }, 5000); // Auto-slide every 5 seconds
    },
  },
  mounted() {
    this.autoSlide();
  },
};
</script>
<style scoped>
/* Smooth transition for slide effect */
.transition-transform {
  transition: transform 0.7s ease-in-out;
}
</style>
