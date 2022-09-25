<script>
import { mapStores } from "pinia";
import { useBookStore } from "../stores/books";

export default {
    data(){
        return{
            currentBook:{

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
    <h1>Soy el detalle</h1>
    <p class="algo">Id del producto: {{ $route.params.bookId }}</p>
    <p>Nombre Producto: {{ currentBook.name }}</p>
  </div>
</template>


<style>

</style>