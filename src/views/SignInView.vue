<script>
import {useAuthenticationStore} from '../stores/authentication'
import { mapStores } from "pinia";
import {auth} from "../firebase/config"
    export default{
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            signIn(e) {
                e.preventDefault()
                this.authenticationStore.signIn(this.email, this.password)
            },
            logOut(e) {
                e.preventDefault()
                this.authenticationStore.logOut()
            }
        },
        computed: {
            ...mapStores(useAuthenticationStore),
            userIsLogged(){
                return this.authenticationStore.user !== null
            }
        },
        mounted(){
            console.log(auth.currentUser)
        },
    }
</script>
<template>
    <section v-if="!userIsLogged">
    <h1 class="text">Inicia Sesion</h1>
    <form class="sign-in">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="email">
        <br>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password">
        <button class="btn" @click="signIn">Iniciar sesion</button>
    </form>
   </section>
   <section v-else>
    <router-link to="/FerLex" class-active="">
            <button class="continue-btn"> Continue </button>
    </router-link>
    <h1>El usuario ya esta loggeado</h1>
    <button @click="logOut">cerrar sesion</button>
   </section>
</template>  
<style scoped lang="scss">
.text{
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    margin: auto;
    padding-bottom: 30px;
}
.sign-in {
    font-family: 'Avenir LT Std', sans-serif;
    font-size: 16px;
    font-weight: 300;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input {
  border-style: solid;
  border-width: 1px;
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