<template>
  <div class="w-8/12 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img class="size-[671px]" :src="product.image" alt="" />
        <!-- <div v-if="image in product.showImage">
          <img :src="image.link" alt="" />
        </div> -->
      </div>
      <div class="mx-14">
        <div class="mt-20">
          <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-xl font-semibold">Tk {{ product.price }}.00</p>

          <div class="my-10">
            <p class="text-xs" v-if="product.inStock">4 In Stock</p>
            <p class="text-xs text-red-600" v-else="!product.inStock">
              Out Of Stock
            </p>
          </div>
          <div class="mt-2 mb-10">
            <p class="text-sm font-semibold">Size: M</p>
            <div class="flex gap-2">
              <div v-for="size in product.size">
                <button class="border size-10">{{ size }}</button>
              </div>
            </div>
          </div>

          <p class="text-sm mb-3">
            Subtotal: TK {{ product.price * product.quantity }}.00
          </p>
          <p class="text-sm font-semibold">Quantity:</p>
          <div class="flex items-center gap-5">
            <div class="flex gap-7 border items-center h-12 my-3 px-2">
              <button class="text-3xl cursor-pointer" @click="decreaseQuantity">
                -
              </button>
              <p>{{ product.quantity <= 0 ? 1 : product.quantity }}</p>
              <button class="text-3xl cursor-pointer" @click="increaseQuantity">
                +
              </button>
            </div>
            <button
              class="uppercase font-semibold border h-12 px-10 hover:bg-black hover:text-white transform delay-100"
            >
              Add To Cart
            </button>
            <button class="">
              <i
                class="pi pi-heart border border-gray-300 rounded-full text-2xl p-3 hover:bg-black hover:text-white transition delay-100"
              ></i>
            </button>
            <button><i class="pi pi-share-alt text-2xl"></i></button>
          </div>

          <button
            class="border uppercase w-full h-12 font-semibold hover:text-white hover:bg-black transition delay-100"
          >
            Buy it now
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="flex gap-5 justify-center">
        <h3
          @click="handleDescription"
          class="text-2xl font-semibold flex justify-center underline"
        >
          Description
        </h3>
        <h3
          @click="handlePolicy"
          class="text-2xl font-semibold flex justify-center underline"
        >
          Shopping Policy
        </h3>
      </div>

      <hr class="my-5 border border-gray-300" />

      <div>
        <img
          class="w-96"
          src="https://cdn.shopify.com/s/files/1/0650/4605/3047/files/Panjabi_Semi_Fit_95f833cb-f480-49fd-a6c2-65b4d09558bf.jpg?v=1741080665"
          alt=""
        />

        <div class="my-10">
          <p>Product Name: {{ product.name }}</p>
          <p>Fabric Blend : {{ product.fabric }}</p>
          <p>Color: {{ product.color }}</p>
        </div>
      </div>

      <div>
        <p>
          Delivery Time Inside Dhaka: 2-3 days Outside Dhaka: 3-5 days Order
          Confirmation Once your order is confirmed, you will receive a
          confirmation SMS with the details of your purchase. Exchange Policy If
          there is any issue with your order, you can exchange the item at any
          of our 47 outlets across the country within 15 days of receiving the
          product. Please ensure that the item is in its original condition,
          with tags intact. Refund Policy Monetary refunds are not available. We
          appreciate your understanding. Exclusions Please note that items
          purchased at a discount or during special offers are not eligible for
          exchange. Thank you for shopping with Dorjibari! If you have any
          questions or need further assistance, please contact our customer
          service team.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import "primeicons/primeicons.css";

export default {
  
  data() {
    return {
      product: {
        image:
          "https://dorjibari.com.bd/cdn/shop/files/2_dcd02819-59aa-463d-af87-a98168261b03.jpg?v=1741688110",
        name: "Panjabi:Semi Fit_Jacquard_341#1",
        price: 2990,
        size: ["M", "L", "XL", "XXL"],
        showImage: [
          {
            link: "https://dorjibari.com.bd/cdn/shop/files/1_2d51357a-ea49-4469-ba63-223e75a8bcc6.jpg?v=1742020875",
          },
          {
            link: "https://dorjibari.com.bd/cdn/shop/files/1_2d51357a-ea49-4469-ba63-223e75a8bcc6.jpg?v=1742020875",
          },
        ],
        stock: 8,
        inStock: this.stock >= 0 ? true : false,
        quantity: 1,
        fabric: "Blended",
        color: "red",
      },
    };
  },

  methods: {
    increaseQuantity() {
      this.product.quantity++;
    },
    decreaseQuantity() {
      this.product.quantity--;
    },
    handleDescription() {
      
    }
  },
};
</script>
