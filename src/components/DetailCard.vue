<script>
import { mapStores } from "pinia";
import { useBookStore } from "../stores/books";
import StarRating from 'vue-star-rating';

export default {
    components: {
        StarRating,
    },
    data() {
        return {
            reviewSubmitted: false,
            rating: 0,
            currentBook: {
                rating: 0,
            }
        };
    },
    inject: ["myRating"],
    methods: {
        setRating(e) {
        this.reviewSubmitted = true;
        this.$emit("rating-selected", e);
      },
    },
    computed: {
        ...mapStores(useBookStore),
        setRating(rating) {
            this.rating = rating;
        },
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
                <h3>{{ currentBook.name }}</h3>
                <p>{{ currentBook.author }}</p>
            </div>
            <div class="detail-rating">
                <star-rating :rating= "currentBook.rating" :increment="0.5" :star-size="30"
                inactive-color="#FFE484" :read-only="reviewSubmitted" active-color="#ffda00"
                @rating-selected="e => $emit('rating-selected', booksStore.updateBook() , e)"></star-rating>
            </div>
            <div class="detail-description">
                <h3> Description </h3>
                <p> {{ currentBook.description }}</p>
                <p class="items" v-for="current in currentBook.genres" :key="current.name">{{ current }}</p>
                <div class="return">
                    <router-link to="/FerLex" tag="button" class="btn"> Accept
                    </router-link>
                </div>

            </div>
        </div>
    </div>
    <!-- <p class="algo">Id del producto: {{ $route.params.bookId }}</p> -->
</template>


<style scoped lang="scss">
.con {
    padding: 40px 0px 0px 8px;
    display: flex;
    justify-content: center;
}

.detail {
    width: 500px;
    height: 500px;
    padding: 0px;
    border: 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 25px;
}

.card-detail {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 318px;
}

.detail .card-detail img {
    border-radius: 25px;
    width: 100%;
}

.detail .detail-content>h3 {
    top: 8px;
    text-align: center;
    color: #000000;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 28px;
    margin-top: 40px;
    padding-top: 60px;
}

.detail .detail-content p {
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 12px;
    font-weight: 300;
    top: 14px;
    text-align: center;
}

.detail .detail-description h3 {
    top: 8px;
    color: #000000;
    margin: 0px;
    top: 0px;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 20px;
    margin-top: 16px;
}

.detail .detail-description p {
    color: #7C8486;
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
    text-align: left;
}

.items {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    font-family: 'Avenir LT Std';
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
.detail .detail-rating{
    margin-top: 24px;
}

.return {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    top: 20px;
}

.btn {
    margin: 10px;
    font-family: Cardo;
    font-size: 22px;
    color: white;
    border: none;
    width: 300px;
    height: 39px;
    border-radius: 5px;
    text-align: center;
    background-color: #2c3639;
}
</style>