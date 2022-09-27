<script>
import Card from "./Card.vue"
import { ref } from 'vue'
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
            arrayToShow: [],
            filterKey: "",
            filterList: "",
        };
    },
    computed: {
        ...mapStores(useBookStore),
        allBooks() {
            return this.booksStore.getBooks;

        },
    },
    setup() {
        return {
            slide: ref(1)
        }
    },
    components: {
        Card
    },
    /* methods:{
    filter() {
      if (this.filterKey == "Author" && this.filterValue != "")
        this.filterByAuthor(this.filterValue);
      if (this.filterKey == "Name" && this.filterValue != "")
        this.filterByPlace(this.filterValue);
    },
    filterByAuthor(author) {
      this.arrayToShow = this.arrayToShow.filter((e) => {
        //console.log(arrayToShow);
        return e.author == author;
       
      });
    },
    filterByPlace(name) {
      this.arrayToShow = this.arrayToShow.filter((e) => {
        return e.name == name;
      });
    },
    } */
}
</script>

<template>
    <main>
        <div class="filters">
            <label>Filter by: </label>
            <select v-model="filterKey">
                <option value="" selected disabled hidden> </option>
                <option>Author</option>
                <option>Name</option>
            </select>
            <input @change="filter" v-model="filterList" />
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

.filters {
    margin-top: 50px;
}
</style>