<template>
    <section class="collection">
        <h2 class="collection__header">our collection</h2>
        <ul class="collection__list">
            <li class="collection__item" v-for="item in collection" :key="item.name">
                <img class="item__img" :src="item.url" alt="">
                <h2 class="item__name" v-text="item.name"></h2>
                <p class="item__description" v-text="item.description"></p>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    computed: {
        collection() {
            return this.$store.getters['home/getCollection'];
        }
    },

    mounted() {
        console.log(this.$store);
        this.$store.dispatch('home/getCoffeeCollection')
    }
}

</script>

<style scoped>
.collection {
    margin-top: 12rem;
}

.collection__header {
    text-align: center;
    font-size: 4rem;
    font-weight: 800;
    color: var(--grey);
    font-family: 'Fraunces', serif;
    opacity: .5;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.collection__list {
    margin: 4rem 2rem;
}
.collection__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 6rem;
}

.item__img {
    width: 70%;
}

.item__name {
    margin: 3rem 0 2rem 0;
    font-size: 2.6rem;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    color: var(--dark-grey-blue);
}

.item__description {
    text-align: center;
    font-family: 'barlow, serif';
    line-height: 2.2rem;
    font-size: 1.6rem;
    color: var(--dark-grey-blue);
    opacity: .8;
}
</style>