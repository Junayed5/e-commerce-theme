<template>
  <div class="w-4/6 mx-auto flex">
    <div class="w-1/6">
      <div class="my-5">
        <p class="text-sm font-bold uppercase py-3">Categories</p>
        <hr />
      </div>
      <div>
        <div class="mb-5 mt-14">
          <p class="text-sm font-bold uppercase py-3">Availability</p>
          <hr />
        </div>

        <div>
          <div>
            <input type="checkbox" name="In-stock" id="" />
            <label for="In-stock" class="pl-3 text-sm">In stock</label>
          </div>
          <div>
            <input type="checkbox" name="out-of-stock" id="" />
            <label for="out-of-stock" class="pl-3 text-sm">Out of stock</label>
          </div>
        </div>

        
      </div>
      <div>
        <div class="mb-5 mt-16">
          <p class="text-sm font-bold uppercase py-3">Price</p>
          <hr />
        </div>

        <div>
          <input type="range" name="price" id="price">

          <div class="flex items-center gap-3">
            <input type="text" class="h-10 w-20 border bg-[url('https://cdn-icons-png.flaticon.com/128/9382/9382311.png')] bg-left bg-[auto_13px] bg-no-repeat pl-5">
            <p>to</p>
            <input type="text" class="h-10 w-20 border bg-[url('https://cdn-icons-png.flaticon.com/128/9382/9382311.png')] bg-left bg-[auto_13px] bg-no-repeat pl-5">
          </div>

          <button class="h-12 w-full bg-black hover:bg-white text-white hover:text-black border text-lg font-semibold my-5 uppercase">Apply</button>
        </div>


      </div>
    </div>
    <div class="w-5/6">products</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
};
</script>
