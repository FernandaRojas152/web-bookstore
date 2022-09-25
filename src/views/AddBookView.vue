<template>
   <form @submit.prevent="handleSubmit">
        <label> Book cover: </label>
        <input type="image" v-model="image" placeholder="img">
        <label> Name: </label>
        <input type="text" required v-model="name" placeholder="Book name">
        <label> Author: </label>
        <input type="text" required v-model="author" placeholder="Author">
        <label> Description: </label>
        <input type="text" required v-model="description" placeholder="Your book description">
        <label>Genres: </label>
        <input type="text" v-model="genre" @keyup.alt="addGenre">
        <div v-for="g in genres" :key="g" class="pill">
            {{g}}
        </div>
        <div class="submit">
            <button> Add Book </button>
        </div>
    </form>
</template>

<script>
   export default {
        data(){
            return{
                image: '',
                name: '',
                author: '',
                description: '',
                genre: '',
                genres: [],
            }
        },
        methods: {
            addGenre(e) {
                if (e.key === ',' && this.genre) {
                    if (!this.genres.includes(this.genre)) {
                        this.genres.push(this.genre);
                    }
                    this.genre = '';
    
                }
            },
            handleSubmit(){
                console.log('name', this.name);
                console.log('author: ', this.author);
                console.log('description: ', this.description);
                console.log('genre: ', this.genres);
            }
        }
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
  </style>