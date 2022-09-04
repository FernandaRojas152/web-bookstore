<template>
    <header>
        <figure>
            <img alt="Women Reading" class="logo" src="../assets/women-book.jpg" />
        </figure>
    </header>
        <section class="content">
            <article class="title">
                <h1 id="library-name">FerLex</h1>
            </article>
            <article class="library-description">
                <h2 id="text-library">LIBRARY</h2>
                <p>“I have always imagined that Paradise will be a kind of library.”</p>
            </article>
            <router-link to="/FerLex" class-active="">
                <div class="buttons">
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
            </router-link>
        </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
figure {
    display: flex;
    justify-content: center;
}

.logo {
    top: 0px;
    width: 330px;
    height: 330px;
}

h1 {
    font-family: "Brittany Signature", sans-serif;
    font-size: 48px;
    color: #313D48;
    text-align: center;
}

#text-library {
    margin-top: -10px;
    position: relative;
    right: 81px;
    color: #689689;
    font-family: Cardo;
    font-size: 22px;
    font-weight: 700;
    text-align: right;
}

p {
    color: #7C8486;
    font-family: Cardo;
    font-size: 12px;
    width: 270px;
    left: 65px;
    text-align: center;
    top: 48px;
    font-weight: 400;
}

.buttons {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    top: 102px;
}

button {
    margin: 10px;
    font-family: Cardo;
    font-size: 22px;
    color: white;
    border: none;
    width: 294px;
    height: 39px;
    border-radius: 5px;
    background-color: #2c3639;
}

@media (min-width: 1024px) {
    figure .logo {
        padding-left: 10px;
        width: 550px;
        height: 550px;
    }

    figure {
        float:left;
        justify-content: flex-start;
    }

    .content {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        top: 140px;
    }

    h1 {
        font-size: 100px;
    }
    #text-library{
        font-size: 38px;
        right: 190px;
    }

    p{
        font-size: 20px;
        width: 500px;
        left: 160px;

    }
}
</style>