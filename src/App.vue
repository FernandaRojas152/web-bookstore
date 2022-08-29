<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Discover</RouterLink>
      <RouterLink to="/about">My books</RouterLink>
      <RouterLink to="/about">Cart</RouterLink>
      <RouterLink to="/about">My Account</RouterLink>
    </nav>
  </header>
  <figure>
    <img alt="Women Reading" class="logo" src="./assets/women-book.jpg" />
  </figure>
  <section class="content">
    <article class="title">
      <h1 id="library-name">FerLex</h1>
    </article>
    <article class="library-description">
      <h2 id="text-library">LIBRARY</h2>
      <p>“I have always imagined that Paradise will be a kind of library.”</p>
    </article>
    <div class="buttons">
      <button>Sign in</button>
      <button>Sign up</button>
    </div>

  </section>

  <footer> </footer>
  <RouterView />
</template>

<style scoped lang="scss">
.logo {
  top: 0px;
  width: 330px;
  height: 330px;
}

figure {
  display: flex;
  justify-content: center;
}

nav {
  overflow: hidden;
  width: 100%;
  background-color: papayawhip;
  text-align: center;
  position: fixed;
  height: 55px;
  bottom: 40px;
}

nav a.router-link-exact-active {
  color: black;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

h1 {
  font-family: "Brittany Signature", sans-serif;
  font-size: 48px;
  color: #313D48;
  text-align: center;
}

#text-library {
  margin-top: -10px;
  position:relative;
  right: 81px;
  color: #689689;
  font-family: Cardo;
  font-size: 22px;
  font-weight: 700;
  text-align: right;
}

p {
  color: #7C8486;
  font-family: Cardo;
  font-size: 12px;
  width: 270px;
  left: 65px;
  text-align: center;
  top: 48px;
  font-weight: 400;
}
.buttons{
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  top: 102px;
}

button{
  margin: 10px;
  font-family: Cardo;
  font-size: 22px;
  color: white;
  border: none;
  width: 294px;
  height: 39px;
  border-radius: 5px;
  background-color: #2c3639;
}

@media (min-width: 1024px) {
  nav {
    display: flex;
    justify-content: space-around;
    top: 0;
    width: 100%;
    height: 50px;
  }
}
</style>
