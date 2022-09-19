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
        <nav>
            <RouterLink to="/FerLex">Discover</RouterLink>
            <RouterLink to="/addBook">Add book</RouterLink>
            <RouterLink to="/about">Cart</RouterLink>
            <RouterLink to="/account"><Profile/></RouterLink>
        </nav>
    </header>
    <main>
        
        <div class="panels">
            <BookList />
        </div>
        
    </main>
    <footer>

    </footer>
</template>


<style scoped lang="scss">

nav {
    font-family: Cardo;
    font-size: 22px;
    overflow: hidden;
    width: 100%;
    background-color: papayawhip;
    text-align: center;
    position: fixed;
    height: 70px;
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



.panels{
    position:initial;
}
@media (min-width: 1024px) {
    nav {
        display: flex;
        justify-content: space-around;
        top: 0;
    }
}
</style>