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
            books: [
                {
                    bookImg: "",
                    name: "",
                    author: ""
                },
                {
                    bookImg: "",
                    name: "",
                    author: ""
                },
                {
                    bookImg: "",
                    name: "",
                    author: ""
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <h3> My Library </h3>
    </header>
    <main>
        <div class="q-pa-md">
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                control-color="primary" navigation padding arrows height="500px"
                class="bg-grey-1 shadow-2 rounded-borders">
                <q-carousel-slide :name="1" class="column no-wrap" style="padding-left: 0px">
                    <div class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <slot>
                            <Card />
                        </slot>
                        <slot>
                            <Card />
                        </slot>
                        <slot>
                            <Card />
                        </slot>
                        <!-- <q-img class="rounded-borders col-6 full-height"
                            src="https://cdn.quasar.dev/img/mountains.jpg" />
                        <q-img class="rounded-borders col-6 full-height"
                            src="https://cdn.quasar.dev/img/parallax1.jpg" /> -->
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <slot>
                            <Card />
                        </slot>
                        <slot>
                            <Card />
                        </slot>
                        <slot>
                            <Card />
                        </slot>
                        <!-- <q-img class="rounded-borders col-6 full-height"
                            src="https://cdn.quasar.dev/img/parallax2.jpg" />
                        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <slot>
                            <Card />
                        </slot>
                        <slot>
                            <Card />
                        </slot>
                        <slot>
                            <Card />
                        </slot>
                        <!-- <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
                        <q-img class="rounded-borders col-6 full-height"
                            src="https://cdn.quasar.dev/img/linux-avatar.png" /> -->
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </main>
    <footer>

    </footer>
</template>



<style>
h3 {
    font-family: 'Cardo';
    position: initial;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
}

.q-pa-md {
    height: 500px;
}
</style>