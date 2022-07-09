<script setup>
import Nav from './components/Nav.vue'
import Welcome from './components/Welcome.vue'
</script>

<template>
  <Welcome msgTitle="Welcome!" msg="Artasce Creative Site with Vue 3 + Vite" />
  <Nav />
  <router-view />

</template>

<style>
:root {
  background-color: #61198D;
  color: rgba(255, 255, 255, 0.54);
}

:root a {
  color: lightpink;
}

:root button {
  padding: 1.2rem 2rem;
  border: none;
  border-radius: .5rem;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.54);
  color: #61198D;
  text-transform: uppercase;
}

nav ul {
  list-style: none;
  margin: 0;
  background-color: #61198D;
  padding: 1rem;
}

nav ul li {
  display: inline;
  padding: 2rem;
  
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 5rem 1.2rem;
  padding: 5rem 3rem;
  background-color: #9C27B0;
  border-radius: 1rem;
}
</style>
