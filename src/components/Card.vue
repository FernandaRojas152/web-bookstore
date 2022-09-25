<template>
    <div class="container">
        <ul>
            <li v-for="book in books" :key="book.name">
                <div class="card">
                    <div class="card-image">
                        <img :src="book.image" :alt="book.name">
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
export default {
    data() {
        return {
            books: [
                {
                    image: './src/assets/books/poe-poems.jpg',
                    name: 'Poems from Edgar Allan Poe',
                    author: 'Edgar Allan Poe',
                    description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                    genre: '',
                    genres: ['Terror', 'Supernatural fiction', 'Poetry'],
                },
                {
                    image: './src/assets/books/poe-tales.jpg',
                    name: 'The Complete Tales and Poems from Edgar Allan Poe',
                    author: 'Edgar Allan Poe',
                    description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                    genre: '',
                    genres: ['Terror', 'Supernatural fiction', 'Thriller'],
                },
                {
                    image: './src/assets/books/chuya-poems.jpg',
                    name: 'The Poems of Nakahara Chuya',
                    author: 'Nakahara Chuya',
                    description: 'This selection of poems from throughout Nakahara’s creative life includes collected and uncollected work and draws on recent scholarship to give a full account of this extraordinary figure.',
                    genre: '',
                    genres: ['Poetry', 'Supernatural fiction'],
                },
                {
                    image: './src/assets/books/crime-punishment.jpg',
                    name: 'The Complete Tales and Poems from Edgar Allan Poe',
                    author: 'Edgar Allan Poe',
                    description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                    genre: '',
                    genres: ['Terror', 'Supernatural fiction'],
                },
                {
                    image: './src/assets/books/little-women.jpg',
                    name: 'The Complete Tales and Poems from Edgar Allan Poe',
                    author: 'Edgar Allan Poe',
                    description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                    genre: '',
                    genres: ['Terror', 'Supernatural fiction'],
                },
                {
                    image: './src/assets/books/pride-prejudice.jpeg',
                    name: 'The Complete Tales and Poems from Edgar Allan Poe',
                    author: 'Edgar Allan Poe',
                    description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                    genre: '',
                    genres: ['Terror', 'Supernatural fiction'],
                },
                {
                    image: './src/assets/books/song-achilles.jpg',
                    name: 'The Complete Tales and Poems from Edgar Allan Poe',
                    author: 'Edgar Allan Poe',
                    description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                    genre: '',
                    genres: ['Terror', 'Supernatural fiction'],
                },
                {
                    image: './src/assets/books/great-gatsby.png',
                    name: 'The Great Gatsby',
                    author: 'Edgar Allan Poe',
                    description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                    genre: '',
                    genres: ['Terror', 'Supernatural fiction'],
                },

            ]
        }
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
}

.card {
    width: 140px;
    height: 230px;
    padding: 0px;
    border: 0;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
    margin: 8px 0 22px;
    bottom: 8px;
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