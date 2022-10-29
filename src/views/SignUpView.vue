<script>
import { useAuthenticationStore } from '../stores/authentication'
import { mapStores } from "pinia";
import { auth } from "../firebase/config"
export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        newUser(e) {
            e.preventDefault()
            if (this.password === this.confirmPassword) {
                this.authenticationStore.newUser(this.email, this.password)
            }
            else alert('Passwords no coinciden')
        }
    },
    computed: {
        ...mapStores(useAuthenticationStore)
    },
    mounted() {
        console.log(auth.currentUser)
    }
}
</script>
<template>
    <section>
        <h1 class="text">Crear Una Cuenta</h1>
        <form class="sign-up">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model="email">
            <br>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" v-model="password">
            <br>
            <label for="cpassword">Confirm Password:</label>
            <input type="password" name="cpassword" id="cpassword" v-model="confirmPassword">
            <button class="btn" @click="newUser">Crear cuenta</button>
        </form>
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
.sign-up {
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