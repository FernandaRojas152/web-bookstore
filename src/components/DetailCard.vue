<script>
import { mapStores } from "pinia";
import { useBookStore } from "../stores/books";

export default {
    data() {
        return {
            currentBook: {

            }
        };
    },
    computed: {
        ...mapStores(useBookStore),
    },
    mounted() {
        this.currentBook = this.booksStore.getBookById(this.$route.params.bookId);
    },

}
</script>

<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-image">
                    <img :src="currentBook.image" :alt="currentBook.name">
                </div>
                <div class="card-content">
                    <h3>{{currentBook.name}}</h3>
                    <p>{{currentBook.author}}</p>
                </div>
            </div>
            <div class="card-description">
                <h3> Description </h3>
                <p> {{currentBook.description}}</p>
                <p>{{currentBook.genres}}</p>
            </div>
        </div>
        <!-- <p class="algo">Id del producto: {{ $route.params.bookId }}</p> -->
    </div>
</template>


<style>

</style>