<template>
  <div class="landing">
    <div class="information">
      <div class="container-info">
        <h1>Pomade Cartel</h1>
        <p>
          The first pomade and hair grooming one
          <br class="break" />stop shop in the philippines.
        </p>
        <button>Shop now</button>
      </div>
    </div>
    <div class="image-container">
      <div class="images">
        <img src="../assets/me.jpg" alt />
        <img class="man2 slide-man" src="../assets/men2.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  mounted() {
    const images = document.querySelector(".images");
    console.log(images);

    images.addEventListener("mouseover", () => {
      const man2 = document.querySelector(".man2");
      //   man2.classList.add("slide-man");
      man2.style.width = "100%";
    });
    images.addEventListener("mouseleave", () => {
      const man2 = document.querySelector(".man2");
      //   man2.classList.add("slide-man");
      man2.style.width = "0%";
    });
  },
};
</script>

<style scoped>
.landing {
  display: flex;
}
.landing .information,
.landing .image-container {
  /* border: 1px solid black;  */
  width: 50vw;
  height: 90vh;
}
/* info disgn */
.landing .information {
  position: relative;
  display: flex;
  justify-content: end;
  align-content: center;
}
.landing .information .container-info {
  /* background: red; */
  /* width: 320px; */
  height: fit-content;
  margin-top: 30%;
  margin-left: auto;
  margin-right: auto;
}
.landing .information .container-info h1 {
  font-size: 52px;
  letter-spacing: 4px;
}
.landing .information .container-info p {
  font-size: 20px;
  color: #181818;
  letter-spacing: 2px;
}

.landing .information .container-info button {
  background: #f1eed8;
  padding: 10px 50px;
  border: none;
  margin-top: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.151);
}
.landing .information .container-info button:active {
  background: #eeebc9;
}
/* imgage design */
.landing .image-container {
  position: relative;
}
.landing .image-container .images {
  position: absolute;
  height: 412px;
  width: 398px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.landing .image-container img {
  /* opacity: 0; */
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  right: 0;
}
.landing .image-container .man2 {
  width: 0%;
  transition: 1s;
}


@media only screen and (max-width: 1000px) {
  .landing {
    flex-direction: column-reverse;
  }
  .landing .image-container {
    width: 100vw;
    height: 30vh;
    margin-top: 30px;
  }
  .landing .information {
    width: 100vw;
    height: fit-content;
    justify-content: start;
  }
  .landing .image-container .images {
    height: 100%;
    width: 50vw;
  }

  .landing .information .container-info {
    margin-top: 0px;
    /* background: red; */
    margin-left: 50vw;
    text-align: center;
    transform: translateX(-50%);
  }
  .landing .information .container-info h1 {
    font-size: 26px;
    letter-spacing: 4px;
    white-space: nowrap;
  }
  .landing .information .container-info p {
    font-size: 13px;
    color: #181818;
    letter-spacing: 2px;
    width: 230px;
  }

  .landing .information .container-info button {
    background: #f1eed8;
    padding: 10px 50px;
    border: none;
    margin-top: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.151);
  }
  .break {
    display: none;
  }
}
</style>