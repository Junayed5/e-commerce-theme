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
  <div
    class="w-full md:w-3/5 mx-auto gap-7 my-10 grid grid-cols-2 md:grid-cols-4"
  >
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
  <!-- new arrival -->
  <div>
    <div class="w-full md:w-3/5 mx-auto">
      <div class="flex justify-between items-center mt-7 mb-3">
        <hr class="border-1 w-4/12" />
        <h3 class="text-sm md:text-xl font-semibold uppercase">New Arrival</h3>
        <hr class="border-1 w-4/12" />
      </div>
      <div>
        <p class="flex justify-center underline text-sm font-semibold">
          View All
        </p>
      </div>
    </div>
    <div class="w-full md:w-3/5 mx-auto my-10 grid grid-cols-2 md:grid-cols-4">
      <div v-for="(product, index) in products" :key="index" class="">
        <div>
          <img :src="product.image" :alt="product.title" />
          <p class="text-center text-sm py-1">{{ product.title }}</p>
          <p class="text-center font-semibold py-2">
            TK.{{ product.price }}.00
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-10">
      <button class="h-12 w-60 font-semibold bg-gray-800 text-white uppercase">
        Show More
      </button>
    </div>
  </div>
  <!-- new arrival -->
  <!-- hero -->
  <div
    class="bg-[url('https://dorjibari.com.bd/cdn/shop/files/photo-3.jpg?v=1720339843&width=2000')] bg-center bg-cover bg-no-repeat relative h-screen"
  >
    <div class="w-[400px] text-white absolute top-72 left-96">
      <h3 class="text-4xl font-semibold uppercase">
        Premium Panjabi <br />
        Collection
      </h3>
      <p class="text-xl my-7">
        Discover elegance with Dorjibari's Premium Panjabi Collection. Crafted
        with fine fabrics and intricate designs for ultimate comfort and style.
      </p>
      <button class="h-12 w-60 font-semibold bg-gray-800 text-white uppercase">
        Shop now
      </button>
    </div>
  </div>
  <!-- hero -->

  <!-- featured -->
  <div>
    <div class="w-full md:w-3/5 mx-auto">
      <div class="flex justify-between items-center mt-7 mb-3">
        <hr class="border-1 w-4/12" />
        <h3 class="text-sm md:text-xl font-semibold uppercase">
          Featured Products
        </h3>
        <hr class="border-1 w-4/12" />
      </div>
      <div>
        <p class="flex justify-center underline text-sm font-semibold">
          View All
        </p>
      </div>
    </div>
    <div class="w-full md:w-3/5 mx-auto my-10 grid grid-cols-2 md:grid-cols-4">
      <div v-for="(product, index) in products" :key="index" class="">
        <div>
          <img :src="product.image" :alt="product.title" />
          <p class="text-center text-sm py-1">{{ product.title }}</p>
          <p class="text-center font-semibold py-2">
            TK.{{ product.price }}.00
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- featured -->
  <img
    src="https://dorjibari.com.bd/cdn/shop/files/Dorjibari-Website-Banner-3-Fial.png?v=1723632714&width=2000"
    alt=""
  />
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
      products: [
        {
          image:
            "https://dorjibari.com.bd/cdn/shop/files/1_4725c873-27d1-448a-bfe9-fe4e9fc00e14.jpg?v=1741153209",
          hoverImage:
            "https://dorjibari.com.bd/cdn/shop/files/2_74d40ec0-a31f-4995-887a-06b7b1efd8f5.jpg?v=1741153209",
          title: "Panjabi:Semi Fit_Fil-a-Fil_329#4",
          price: "2,490",
        },
        {
          image:
            "https://dorjibari.com.bd/cdn/shop/files/1_4725c873-27d1-448a-bfe9-fe4e9fc00e14.jpg?v=1741153209",
          hoverImage:
            "https://dorjibari.com.bd/cdn/shop/files/2_74d40ec0-a31f-4995-887a-06b7b1efd8f5.jpg?v=1741153209",
          title: "Panjabi:Semi Fit_Fil-a-Fil_329#4",
          price: "2,490",
        },
        {
          image:
            "https://dorjibari.com.bd/cdn/shop/files/1_4725c873-27d1-448a-bfe9-fe4e9fc00e14.jpg?v=1741153209",
          hoverImage:
            "https://dorjibari.com.bd/cdn/shop/files/2_74d40ec0-a31f-4995-887a-06b7b1efd8f5.jpg?v=1741153209",
          title: "Panjabi:Semi Fit_Fil-a-Fil_329#4",
          price: "2,490",
        },
        {
          image:
            "https://dorjibari.com.bd/cdn/shop/files/1_4725c873-27d1-448a-bfe9-fe4e9fc00e14.jpg?v=1741153209",
          hoverImage:
            "https://dorjibari.com.bd/cdn/shop/files/2_74d40ec0-a31f-4995-887a-06b7b1efd8f5.jpg?v=1741153209",
          title: "Panjabi:Semi Fit_Fil-a-Fil_329#4",
          price: "2,490",
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
