<template>
    <figure>
        <img src="../assets/profile.png" alt="">
    </figure>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
figure {
    display: flex;
}
figure img{
    width: 45px;
    height: 50px;
}
@media (min-width: 1024px) {
    figure img {
        width: 100px;
        height: 70px;
    }
}
</style>