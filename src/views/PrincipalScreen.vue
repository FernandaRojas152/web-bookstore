<script>
import BookList from "../components/BookList.vue"
import Profile from "../components/Profile.vue"
export default {
    components: {
        BookList, Profile
    }
}
</script>

<template>
    <header>
        <Profile/>
        <nav>
            <RouterLink to="/">Discover</RouterLink>
            <RouterLink to="/about">My books</RouterLink>
            <RouterLink to="/about">Cart</RouterLink>
            <RouterLink to="/about">My Account</RouterLink>
        </nav>
    </header>
    <main>
        <BookList />
    </main>
    <footer>

    </footer>
</template>


<style>

nav {
    font-family: Cardo;
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
@media (min-width: 1024px) {
    nav {
        display: flex;
        justify-content: space-around;
        top: 0;
    }
}
</style>