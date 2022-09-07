<template>
  
  <div class="container">
    
    <div class="split left">
      <h1>Audios</h1>
      <a href="audios" class="button">Ver todos</a>
    </div>
    <div class="split right">
      <h1>Música</h1>
      <a href="musica" class="button">Entrar a la discoteca</a>
    </div>
    <div class="split right">
      <h1>Música</h1>
      <a href="musica" class="button">Entrar a la discoteca</a>
    </div>
    <footer>
    <a href="https://paypal.me/arieshh?country.x=ES&locale.x=es_ES" target="_blank">
    <img
      class="paypal"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
      alt=""
    />
  </a>
  <p>Creado por arieshh / ikerikohh</p>
</footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  mounted() {
    this.heroAnimations();
  },
  methods: {
    heroAnimations() {
      const left = document.querySelector(".left");
      const right = document.querySelector(".right");
      const container = document.querySelector(".container");

      left.addEventListener("mouseenter", () => {
        container.classList.add("hover-left");
      });

      left.addEventListener("mouseleave", () => {
        container.classList.remove("hover-left");
      });

      right.addEventListener("mouseenter", () => {
        container.classList.add("hover-right");
      });

      right.addEventListener("mouseleave", () => {
        container.classList.remove("hover-right");
      });
    },
  },
};
</script>
<style >
@import url("https://fonts.googleapis.com/css?family=Jura:400,700");

/* --------- */
/* VARIABLES */
/* --------- */

/* Scope variables to the root element */
:root {
  --container-bg-color: #333333;
  --left-bg-color: rgba(166, 97, 86, 0.7);
  --left-button-hover-color: rgba(145, 85, 76, 0.7);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --right-button-hover-color: rgba(109, 109, 109, 0.3);
  --hover-width: 75%;
  --other-width: 25%;
  --speed: 1000ms;
}

/* ------------- */
/* GLOBAL STYLES */
/* ------------- */
footer{
  display: flex;
  align-items: center;
  justify-content:center;
  gap:2rem;
  width:100vw !important;
  background-color: transparent;
  color:White;
  font-size:1rem;
  position:absolute;
  bottom: 0;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Jura", "Arial Narrow", Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.paypal{
  max-width:2rem;
}
h1 {
  font-size: 2.8rem;
  color: #f3f2f2;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
}

/* ---------- */
/* CONTAINERS */
/* ---------- */

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--container-bg-color);
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

/* ------- */
/* BUTTONS */
/* ------- */

.button {
  display: block;
  position: absolute;
  left: 50%;
  top: 40%;
  height: 2.5rem;
  width: 15rem;
  padding-top: 1.3rem;
  text-align: center;
  color: #f3f2f2;
  border: solid 0.1rem #f3f2f2;
  border-radius: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transform: translateX(-50%);
}

.split.left .button:hover {
  background-color: var(--left-button-hover-color);
  border-color: var(--left-button-hover-color);
}

.split.right .button:hover {
  background-color: var(--right-button-hover-color);
  border-color: var(--right-button-hover-color);
}

/* --------- */
/* LEFT SIDE */
/* --------- */

.split.left {
  left: 0;
  background: url("../assets/loco-wolfangkillers.gif") center center no-repeat;
  background-size: cover;
}

.split.left:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--left-bg-color);
}

/* ---------- */
/* RIGHT SIDE */
/* ---------- */

.split.right {
  right: 0;
  background: url("../assets/wolfangkillers-wolfench.gif") center center
    no-repeat;
  background-size: cover;
}

.split.right:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--right-bg-color);
}

/* ---------- */
/* ANIMATIONS */
/* ---------- */

.split.left,
.split.right,
.split.left:before,
.split.right:before {
  transition: var(--speed) all ease-in-out;
}

/* Mouse Hover Left */

.hover-left .left {
  width: var(--hover-width);
}

.hover-left .right {
  width: var(--other-width);
}

.hover-left .right:before {
  /* Fade right side */
  z-index: 2;
}

/* Mouse Hover Right */
.hover-right .left {
  width: var(--other-width);
}

.hover-right .right {
  width: var(--hover-width);
}

.hover-right .left:before {
  /* Fade left side */
  z-index: 2;
}

/* ------------- */
/* MEDIA QUERIES */
/* ------------- */

@media only screen and (max-width: 800px) {
  h1 {
    font-size: 2rem;
  }

  .button {
    width: 12rem;
  }
}

@media (max-height: 700px) {
  .button {
    top: 70%;
  }
}
</style>
