<template>
  <div class="product-section">
    {{name}}
    <div class="productsss-container">
      <div class="product-container" v-for="(product, index) in products" :key="index">
        <div class="img-container">
          <img :src="product.url" alt="asdasdasd" />
          <div class="hover-img">
            <img :src="require(`../assets/pomades/hover.png`)" alt />
            <p class="add-msg" @click="()=>{viewProduct(index)}">View product</p>
          </div>
        </div>
        <div class="bottom">
          <p class="title">{{product.name}}</p>
          <div class="price" @click="()=>{addToCart(index)}">
            <p>₱{{product.price}}</p>

            <ShoppingCart2 class="cart-logo" />
            <span>Add to cart</span>
          </div>
        </div>
      </div>
    </div>

    <Description :view_product="view_product" />
  </div>
</template>

<script>
import ShoppingCart2 from "./icons/shoppingCart2";
import Description from "./description";

export default {
  name: "ProductSection",
  components: {
    ShoppingCart2,
    Description,
  },
  data() {
    return {
      hoverUrl: "",
      view_product: {
        url: require(`../assets/pomades/product (8).jpg`),
        name: "Greasy Basky POmade",
        price: 560.0,
        description: { hold: 2, shine: 2, washability: 2, restylability: 5 },
      },
    };
  },
  methods: {
    addToCart(target) {
      alert(target);
      const args = { index: target, byIndex: true };
      this.$store.commit("addProductsOnCart", args);
    },
    viewProduct(index) {
      console.log(index);
      this.view_product = this.products[index];
      const description_modal = document.querySelector(".description-modal");
      description_modal.style.display = "block";
      // description_modal.style.animation = "slideIn 1s forwards";
      description_modal.style.left = 0 + "vw";
    },
  },
  created() {
    window.addEventListener("scroll", () => {
      let products = document.querySelectorAll(".product-container");
      products.forEach((product) => {
        let product_position = product.getBoundingClientRect().top;
        console.log(product_position);
        let screen_Position = window.innerHeight / 1.6;

        if (product_position < screen_Position) {
          product.classList.add("product-appear");
        } else {
          product.classList.remove("product-appear");
        }
      });
    });
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>


<style scoped>
@import url("./styles/product.css");
.product-section {
  background: url("../assets/background.svg");
  background: cover;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px; /*remove this later if nese*/
}
.productsss-container {
  /* background: red; */
  margin: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product-container {
  width: 350px;
  height: 400px;
  position: relative;
  margin-top: 0px;
  opacity: 0;
  transition: 0.5s all ease-in-out;
  transform: translateY(50px);
}

.product-appear {
  opacity: 1;
  transform: translateY(0px);
  width: 370px;
}
.bottom {
  padding: 0px 20px;
  background: white;
  margin: 0px 20px;
  margin-top: -20px;
  padding-bottom: 25px;
}

.img-container {
  /* background: blue; */
  width: 100%;
  height: 310px;
  position: relative;
  padding: 20px;
}
.img-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.hover-img {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 100%;
  opacity: 0;
  transition: 0.3s;
}
.hover-img:hover {
  opacity: 0.8;
}
.add-msg {
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  border-bottom: 5px solid white;

  cursor: pointer;
}
.bottom .price {
  display: flex;
  cursor: pointer;
}
.bottom .price .cart-logo,
.bottom .price span {
  align-self: center;
  color: rgb(95, 95, 95);
}

.bottom .price p {
  background: black;
  color: white;
  width: fit-content;
  padding: 2px 9px;
  margin-right: 15px;
  font-size: 16px;
}
.bottom p {
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  .productsss-container {
    /* background: red; */
    margin: 20px;
  }  
}

</style>