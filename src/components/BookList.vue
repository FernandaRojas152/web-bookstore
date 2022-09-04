<script>
import Card from "./Card.vue"
export default {
    components: {
        Card
    }
}
</script>

<template>
    <header>
        <h3> My Library </h3>
    </header>
    <main>
        <slot>
            <Card />
        </slot>
    </main>
    <footer>

    </footer>
</template>



<style>
h3 {
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
}
</style>