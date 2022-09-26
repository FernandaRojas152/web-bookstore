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
        <div class="con">
            <div class="detail">
                <div class="card-detail">
                    <img :src="currentBook.image" :alt="currentBook.name">
                </div>
                <div class="detail-content">
                    <h3>{{currentBook.name}}</h3>
                    <p>{{currentBook.author}}</p>
                </div>
                <div class="detail-description">
                <h3> Description </h3>
                <p> {{currentBook.description}}</p>
                <p> {{currentBook.genres}} </p>
            </div>
            </div>
            
        </div>
        <!-- <p class="algo">Id del producto: {{ $route.params.bookId }}</p> -->
</template>


<style scoped lang="scss">
.con{
    padding: 40px 0px 0px 8px;
    display: flex;
}
.detail{
    width: 500px;
    height: 500px;
    padding: 0px;
    border: 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 25px;
}

.card-detail{
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 318px;
}
.detail .card-detail img{
    border-radius: 25px;
    width: 100%;
}

.detail .detail-content > h3{
    top: 8px;
    text-align: center;
    color: #000000;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 28px;
    margin-top: 16px;
}

.detail .detail-content p{
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 12px;
    font-weight: 300;
    top: 14px;
    text-align: center;
}

.detail .detail-description h3{
    top: 8px;
    color: #000000;
    margin: 0px;
    top: 0px;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 20px;
    margin-top: 16px;
}
.detail .detail-description p{
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
    text-align: left;
}
</style>