<template>
    <form @submit.prevent="createNewBook">
        <label> Book cover: </label>
        <div>
            <input class="form-control" ref="fileInput" type="file" @input="pickFile">
        </div>
        <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${image})` }" @click="selectImage" >
        </div>
        <label> Name: </label>
        <input type="text" v-model="name" placeholder="Book name">
        <label> Author: </label>
        <input type="text" v-model="author" placeholder="Author">
        <label> Description: </label>
        <input type="text" v-model="description" placeholder="Your book description">
        <label>Genres: </label>
        <input type="text" v-model="genre" @keyup.alt="addGenre">
        <div v-for="g in genres" :key="g" class="pill">
            {{g}}
        </div>
        
        <button @click.prevent="(e) => createNewBook()"> Add Book </button>
    </form>
</template>

<script>
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
            rating: 0,
        };
    },
    computed: {
        ...mapStores(useBookStore),
        allBooks() {
            return this.booksStore.getBooks;
        },
    },
    mounted() {
        this.booksStore.loadBooks()
    },
    methods: {
        createNewBook() {
            const newBook = {
                image: this.image,
                name: this.name,
                author: this.author,
                description: this.description,
                genre: this.genre,
                genres: this.genres,
                rating: 0,
            };

            this.booksStore.newBook(newBook);
            
            this.image = "";
            this.name = "";
            this.author = "";
            this.description = "";
            this.genre = "";
            this.genres = "";
            this.rating=0;
        },
        addGenre(e) {
            if (e.key === ',' && this.genre) {
                if (!this.genres.includes(this.genre)) {
                    this.genres.push(this.genre);
                }
                this.genre = '';

            }
        },
        handleSubmit() {
            console.log('name', this.name);
            console.log('author: ', this.author);
            console.log('description: ', this.description);
            console.log('genre: ', this.genres);
        },
        selectImage() {
            this.$refs.fileInput.click()
        },
        pickFile() {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.image = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },
    },
}
</script>

<style scoped lang="scss">
$primary-button: #2C3639;
$text-color: #000000;

form {
    padding: 40px;
    margin: 30px auto;
    text-align: left;
}

label {
    color: $text-color;
    display: inline-block;
    margin: 25px 0 15px;
    font-family: 'Avenir LT Std';
    font-weight: 400;
    font-size: 16px;
    text-align: center;
}

input {
    padding: 10px 6px;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border-radius: 8px;
}

.pill {
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

.submit {
    text-align: center;
}

button {
    background: $primary-button;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 5px;
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    cursor: pointer;
}
.imagePreviewWrapper {
  background-repeat: no-repeat;
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: contain;
    background-position: center center;
}
</style>