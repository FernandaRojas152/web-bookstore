<script>
import Card from "./Card.vue"
import { mapStores } from "pinia";
import { useBookStore } from "../stores/books";
export default {
    data() {
        return {
            image: "",
            name: "",
            author: "",
            description: "",
            genre: '',
            genres: [],
            keyword: '',
            genre: 'All'
        };
    },
    props: {
        msg: String
    },
    computed: {
        ...mapStores(useBookStore),
        allBooks() {
            return this.booksStore.getBooks;
        },
        getGenres() {
            return this.booksStore.getAllGenres
        }
    },
    components: {
        Card
    },
    methods: {
        setFilter(key, value) {
            this.booksStore.applyFilter(key, value)
        }
    },
}
</script>

<template>
    <main>
        <div class="greetings">
            <h3>Filtros:</h3>
            <label for="keyword">Search by Keyword</label>
            <input type="text" name="keyword" id="keyword" v-model="keyword"
                @change="() => setFilter('keyword', keyword)">
            <br/>
            <label for="genero">Generos</label>
            <select name="genero" id="genero" v-model="genre" @change="() => setFilter('genre', genre)">
                <option v-for="genre in getGenres" :key="genre" :value="genre">{{genre}}</option>
            </select>
        </div>
        <h3>My Library</h3>
        <Card />
    </main>
    <footer>
    </footer>
</template>

<style scoped lang="scss">
body,
main {
    padding-top: 15px;
    height: 100%;
    width: 100%;
}

h3 {
    padding-top: 50px;
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
}
</style>