<script>
import BookList from "../components/BookList.vue"
import Profile from "../components/Profile.vue"


export default {
    components: {
        BookList, Profile
    },
    methods: {
        filter() {
            if (this.filterKey == "Author" && this.filterValue != "")
                this.filterByAuthor(this.filterValue);
            if (this.filterKey == "Place" && this.filterValue != "")
                this.filterByPlace(this.filterValue);

        },
        filterByAuthor(author) {
            this.arrayToShow = this.arrayToShow.filter((e) => {
                return e.author == author;
            });
        },
        filterByPlace(place) {
            this.arrayToShow = this.arrayToShow.filter((e) => {
                return e.place == place;
            });
        },
    }
}
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/FerLex">Discover</RouterLink>
            <RouterLink to="/addBook">Add book</RouterLink>
            <RouterLink to="/about">Cart</RouterLink>
            <RouterLink to="/account">
                <Profile />
            </RouterLink>
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
    body{
        padding:0;
    }
nav {
    font-family: Cardo;
    font-size: 22px;
    width: 100%;
    border-bottom: 1px solid transparent;
    background-color: rgba(254, 237, 237, 0.5);
    bottom: 40px;
    height: 70px;
}

nav a:hover {
    border-bottom: 3px solid #D6BCAE;
}

nav a:active {
    border-bottom: 3px solid #D6BCAE;
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
}
</style>