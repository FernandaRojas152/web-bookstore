<script>
import BookList from "../components/BookList.vue"
import Profile from "../components/Profile.vue"
import HeroHeader from "../components/HeroHeader.vue";
import { mapStores } from "pinia";
import { useBookStore } from "../stores/books";
import {useAuthenticationStore} from '../stores/authentication';

export default {
    components: {
        BookList,
        Profile,
        HeroHeader
    },
    computed: {
    ...mapStores(useAuthenticationStore),
    ...mapStores(useBookStore),
    allBooks(){
      return this.booksStore.getFilteredBooks;
    },
    mounted(){
    this.booksStore.loadBooks()
    }
  },
}
</script>

<template>
    <header>
        <nav  v-if="!authenticationStore.loadingSession">
            <RouterLink to="/FerLex">Discover</RouterLink>
            <RouterLink to="/addBook"  v-if="authenticationStore.userData">Add book</RouterLink>
            <RouterLink to="/about">Cart</RouterLink>
            <RouterLink to="/account">
                <Profile />
            </RouterLink>
        </nav>
        <div v-else>
      loading user...
    </div>
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
body {
    padding: 0;
}

nav {
    font-family: Cardo;
    font-size: 22px;
    width: 100%;
    border-bottom: 1px solid transparent;
    background-color: rgba(254, 237, 237, 0.5);
    position: sticky;
    bottom: 40px;
    height: 70px;
}


nav a.router-link-exact-active {
    color: black;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    text-align: center;
    padding: 0 1rem;
}



@media (min-width: 1024px) {
    nav {
        display: flex;
        justify-content: space-around;
        top: 0;
    }

    nav a:hover {
        border-bottom: 3px solid #D6BCAE;
    }

    nav a:active {
        border-bottom: 3px solid #D6BCAE;
    }
}
</style>