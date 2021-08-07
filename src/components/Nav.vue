<template>
  <div class="nav">
    <a href="#" class="logo" @click="homeRedirect">Pormade Cartel</a>

    <div class="hamburger">
      <a href="#" class="hider">ABOUT US</a>
      <div class="cart-and-signin">
        <div class="signin">
          <a href="#">SIGN-IN</a>
          <LogIn />
        </div>
        <div href class="separator">
          <Separator />
        </div>
        <span @click="cartRedirect">
          <ShoppingCart />
        </span>
      </div>
    </div>

    <svg
      class="navbar"
      height="25"
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="setNavbar"
    >
      <rect class="lines" x="0" :width="navbar[1]" height="2" fill="#191919" />
      <rect class="lines" y="9" :width="navbar[0]" height="2" fill="#191919" />
      <rect class="lines" y="18" :width="navbar[0]" height="2" fill="#191919" />
      <rect class="lines" y="27" :width="navbar[0]" height="2" fill="#191919" />
    </svg>
  </div>
</template>

<script>
import LogIn from "./icons/login";
import Separator from "./icons/separator";
import ShoppingCart from "./icons/shoppingCart";

export default {
  name: "Nav",
  components: { LogIn, Separator, ShoppingCart },
  data() {
    return {
      navbar: [39, 20],
    };
  },
  methods: {
    setNavbar() {
      const hamburger = document.querySelector(".hamburger");
      const hider = document.querySelector(".hider");
      const hider2 = document.querySelector(".nav .hamburger .cart-and-signin");

      if (this.navbar[0] == 39) {
        this.navbar = [20, 39];
        hider.style.display = "flex";
        hider2.style.display = "flex";
        hamburger.style.height = `85px`;
      } else {
        this.navbar = [39, 20];
        hider.style.display = "none";
        hider2.style.display = "none";
        hamburger.style.height = `0px`;
      }
    },
    homeRedirect() {
      this.$router.push("/");
    },
    cartRedirect() {
      this.$router.push("/Checkout");
    },
  },
};
</script>


<style scoped>
.nav {
  height: 70px;
  width: 100%;
  background: #f1eed8;
  display: flex;
  justify-content: center;
  justify-content: space-around;

  align-items: center;
}
.nav a {
  text-decoration: none;
  color: #0f0f0f;
}
.nav .hamburger {
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* align-content: space-around; */
  width: 350px;
}
.nav .hamburger .signin {
  display: flex;
}
.nav .hamburger .cart-and-signin {
  display: flex;
  align-items: center;
}
.nav .hamburger .cart-and-signin .separator {
  margin: 0px 20px 0px 20px;
}
.nav .logo {
  font-weight: bold;
  font-size: 22px;
}

.navbar {
  display: none;
  cursor: pointer;
}
.lines {
  transition: 0.5s;
}

@media only screen and (max-width: 600px) {
  .nav {
    height: 70px;
    width: 100%;
    background: #f1eed8;
    display: flex;
    justify-content: center;
    justify-content: space-around;

    align-items: center;
  }
  .nav .logo {
    font-weight: bold;
    font-size: 22px;
    white-space: nowrap;
  }
  .navbar {
    display: block;
  }
  .nav .hamburger {
    /* display: none; */
    position: absolute;
    background: #0f0f0fee;
    top: 70px;
    width: 100vw;
    height: 0px;
    z-index: 2;
    transition: 0.5s;
  }

  .nav .hamburger .hider,
  .nav .hamburger .cart-and-signin {
    display: none;
    transition: 0.5s ease-in-out;
  }
  .nav .hamburger a {
    color: rgb(240, 240, 240);
    font-size: 15px;
  }
  .icons {
    fill: white;
  }
}
</style>