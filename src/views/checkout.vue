<template>
  <div class="check-out">
    <div class="cart-items-container">
      <h2>Shopping Cart</h2>

      <div class="items">
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="img-container">
            <img :src="item.url" alt="we" />
          </div>
          <div class="description">
            <div class="top">
              <p class="item-name">{{item.name}}</p>
              <Delete :index="index" />
            </div>

            <div class="bot">
              <div class="price-container">
                <p>{{item.price}}</p>
              </div>
              <div class="quantity-container">
                <div @click="()=>{addQuantity(index)}">+</div>
                <!-- <div class="quantity">{{item.quantity}}</div> -->
                <input class="quantity" type="text" :value="item.quantity" />
                <div @click="()=>{subtractQuantity(index)}">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="billing-section"></div>
  </div>
</template>

<script>
import Delete from "@/components/icons/delete.vue";

export default {
  name: "Checkout",
  components: {
    Delete,
  },
  methods: {
    addQuantity(index) {
      this.$store.commit("addQuantity", { index: index, add: true });
    },
    subtractQuantity(index) {
      this.$store.commit("addQuantity", { index: index, add: false });
    },
  },
  computed: {
    items() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
.check-out {
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  /* background: red; */
}
.cart-items-container {
  width: 550px;
}
@media only screen and (max-width: 600px) {
  .cart-items-container {
    width: 100%;
  }
}

.item {
  display: flex;
  /* align-items: center; */
  padding: 10px;
  margin-bottom: 20px;
  /* background: blue; */
}
.item .img-container {
  width: 120px;
  height: 120px;
  /* background: red; */
}
.item img {
  width: 100%;
  object-fit: cover;
}
.description {
  margin-left: 10px;
}
.description .item-name {
  font-size: 20px;
}
.description .price-container {
  background: black;
  width: 80px;
  padding: 2px 10px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin-right: 7px;
}
.description .price-container p {
  color: white;
  align-self: center;
}

/* quantity part */

.quantity-container {
  border: 1px solid rgba(0, 0, 0, 0.164);
  width: 100px;
  display: flex;
  justify-content: space-between;
  padding: 1px;
}
.quantity-container div {
  border: 1px solid rgba(0, 0, 0, 0.096);
  padding: 3px 9px;
  cursor: pointer;
}
.quantity-container .quantity {
  border: none;
  width: 30px;
  text-align: center;
}
.description .bot {
  display: flex;
  margin-top: 7px;
}
.description .top p {
  width: 310px;
  /* background: red; */
}
.description .top {
  display: flex;
  justify-content: space-between;
}
h2 {
  font-weight: 500;
  letter-spacing: 2px;
  padding: 30px;
}
.billing-section {
  width: 400px;
  height: 450px;
  background: #f8f8f8;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.08);
}
</style>