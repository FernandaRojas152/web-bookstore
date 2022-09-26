<script>
import Card from "./Card.vue"
import { ref } from 'vue'

export default {
    setup() {
        return {
            slide: ref(1)
        }
    },
    components: {
        Card
    },
    data() {
        return {
           
        }
    }
}
</script>

<template>
    <main>
        <h3>My Library</h3>
        <Card/>
    </main>
    <footer>
    </footer>
</template>



<style>
h3 {
    padding-top: 50px;
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
}
</style>