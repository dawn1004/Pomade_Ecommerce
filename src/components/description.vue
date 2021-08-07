<template>
  <div class="description-modal">
    <svg
      @click="hideModal"
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 0 24 24"
      width="60"
      class="arrow-back"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
    </svg>
    <div class="container">
      <div class="img-container">
        <img :src="view_product.url" alt />
      </div>
      <div class="details-container">
        <h1>{{view_product.name}}</h1>
        <div class="rates" v-for="(product, index) in view_product.description" :key="index">
          <p>{{index}}:</p>
          <Rating :rate="product" />
        </div>
        <div class="price">
          <p>₱{{view_product.price}}</p>

          <ShoppingCart2 class="cart-logo" />
          <span @click="()=>{addToCart(view_product)}">Add to cart</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Rating from "./icons/rating";
import ShoppingCart2 from "./icons/shoppingCart2";

export default {
  name: "Description",
  props: {
    view_product: Object,
  },
  components: {
    Rating,
    ShoppingCart2,
  },
  methods: {
    hideModal() {
      const modal = document.querySelector(".description-modal");
      modal.style.left = -100 + "vw";
    },
    addToCart(target) {
      // console.log(target);
      const args = { obj: target, byIndex: false };

      this.$store.commit("addProductsOnCart", args);
    },
  },
};
</script>

<style scoped>
.description-modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: white;
  overflow: hidden;
  top: 0;
  left: -100vw;
  z-index: 5;
  /* display: none; */
  transition: 1s;
}

.container {
  display: flex;
  margin-left: 50vw;
  margin-top: 50vh;
  /* background: rgb(136, 10, 10); */
  width: 1000px;
  transform: translate(-50%, -50%);
  justify-content: space-around;
  align-items: center;
}

.img-container {
  width: 500px;
  height: 500px;
}
.img-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  flex: 1;
}

/* end of img */
.details-container {
  flex: 1;
}
.details-container .price {
  display: flex;
  cursor: pointer;
  margin-top: 20px;
  width: 210px;
}
.details-container .price .cart-logo,
.details-container .price span {
  align-self: center;
  color: rgb(95, 95, 95);
  font-size: 18px;
}

.details-container .price p {
  background: black;
  color: white;
  width: fit-content;
  padding: 5px 12px;
  margin-right: 15px;
  font-size: 16px;
  text-align: center;
}
.details-container p {
  font-size: 20px;
}
.details-container h1 {
  margin-bottom: 30px;
  letter-spacing: 3px;
  font-size: 44px;
  font-weight: 500;
}
.details-container .rates {
  display: flex;
  width: 350px;
  margin-top: 10px;
  text-transform: capitalize;
}
.details-container p {
  flex: 1;
}
.details-container .bar {
  flex: 2;
}
.arrow-back {
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 7;
}

.arrow-back:hover {
  fill: rgb(99, 99, 99);
}



@media only screen and (max-width: 600px) {
  .container{
    flex-direction: column;
  }
  .img-container {
    width: 80vw;
    height: auto;
  }
  .details-container {
    flex: 1;
    margin-top: 10px;
    max-width: 100%;
  }
  .details-container h1 {
    margin-bottom: 30px;
    letter-spacing: 1px;
    font-size: 28px;
    font-weight: 500;
  }
}
  
</style>