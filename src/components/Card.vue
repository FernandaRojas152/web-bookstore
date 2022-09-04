<template>
    <div class="container">
        <div class="card">
            <div class="card-image">
                <img src="../assets/books/poe-poems.jpg" alt="...">
            </div>
            <div class="card-content">
                <h3>The Complete Poetry</h3>
                <p>Edgar Allan Poe</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            books: [
                {
                    img: "",
                    author: "",
                    name: ""
                }
            ]
        }
    }
}
</script>


<style>
.container { 
    display: flex;
}

.card {
    width: 140px;
    height:230px;
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
    height:250px;
    }


}
</style>