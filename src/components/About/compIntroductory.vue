<template>
    <div class="about-us__introduction">
        <ul class="introduction__list">
            <li class="introduction__element" v-for="intDetail in intDetails" :key="intDetail.name">
                <img class="introduction__img" :src="intDetail.imgMobile" alt="">
                <div class="introduction__content">
                    <h2 class="introduction__header" v-text="intDetail.name"></h2>
                    <p class="introduction__text" v-text="intDetail.description"></p>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {

    computed: {
        intDetails() {
            return this.$store.getters['about/getAboutUsContent']
        }
    },

    mounted() {
        this.$store.dispatch('about/getAboutUsContent')
    }

}

</script>

<style scoped>
.introduction__element {
    margin: 0 auto;
    max-width: 42rem;
    max-height: 45rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
    position: relative;

}

.introduction__img {
    background-size: cover;
    border-radius: 1rem;
}

.introduction__content{
    width: 90%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    color: var(--white);
    text-align: center;
}
.introduction__header{
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 2rem;
}

.introduction__text{
    line-height: 2.5rem;
    font-size: 1.5rem;
    letter-spacing: .1rem;
    font-weight: 200;
    opacity: .9;
    text-shadow: .1rem .1rem -.3rem;
}
</style>

