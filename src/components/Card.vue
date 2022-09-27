<template>
    <div class="container">
        <ul>
            <li v-for="book in allBooks" :key="book.name" :to="`/book/${book.name}`">
                <div class="card">
                    <div class="card-image">
                        <router-link :to="`/book/${book.name}`">
                            <img :src="book.image" :alt="book.name">
                        </router-link>
                    </div>
                    <div class="card-content">
                        <h3>{{book.name}}</h3>
                        <p>{{book.author}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
import { mapStores } from "pinia";
import { useBookStore } from "../stores/books";

export default {
    props:{
        book:{},
    },
    data() {
        return {
            image: "",
            name: "",
            author: "",
            description: "",
            genre: '',
            genres: [],
        };
    },
    computed: {
        ...mapStores(useBookStore),
        allBooks() {
            return this.booksStore.getBooks;
        },
    },
    methods: {
    },
    mounted() {
        this.booksStore.loadBooks()
    }
}
</script>


<style>
.container {
    padding: 50px 0px 0px 14px;
    display: flex;
}

ul>li {
    display: inline-block;
    margin: 16px 8px;
}

.card {
    width: 140px;
    height: 230px;
    padding: 0px;
    border: 0;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    /**box-shadow: 0 0 30px rgba(0, 0, 0, .04);*/
    transition: .4s ease;
}

.card:hover {
    transform: scale(1.05);
}

.card .card-image img {
    border-radius: 25px;
    width: 100%;
    transition: .4s ease;
}

.card .card-content h3 {
    height: 157px;
    width: 170px;
    color: #000000;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 14px;
    margin-top: 16px;
}

.card .card-content p {
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 14px;
    font-weight: 300;
    bottom: 66px;
    text-align: justify;
}

@media (min-width: 1024px) {
    body {
        height: unset;
        padding: 30px 0;
    }

    .card {
        width: 160px;
        height: 250px;
    }
}
</style>