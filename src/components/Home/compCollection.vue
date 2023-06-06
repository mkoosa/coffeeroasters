<template>
    <section class="collection">
        <h2 class="collection__header">our collection</h2>
        <ul class="collection__list">
            <li class="collection__item" v-for="item in collection" :key="item.name">
                <img class="item__img" :src="item.url" alt="">
                <div class="item__content">
                    <h2 class="item__name" v-text="item.name"></h2>
                    <p class="item__description" v-text="item.description"></p>
                </div>
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
    margin-bottom: 6rem;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
    text-align: center;
}

.item__description {
    text-align: center;
    font-family: 'barlow, serif';
    line-height: 2.2rem;
    font-size: 1.6rem;
    color: var(--dark-grey-blue);
    opacity: .8;
}

@media only screen and (min-width: 768px) {
    .collection {
        margin-top: 12rem;
        position: relative;
    }

    .collection__header {
        position: absolute;
        z-index: 1;
        top: -8rem;
        left: 50%;
        width: 100%;
        transform: translateX(-50%);
        font-size: 9.5rem;
        background: -webkit-linear-gradient(#222, #eee);
        opacity: .3;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .collection__item {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: start;
        position: relative;
        z-index: 10;
    }

    .item__img {
        width: 30%;
    }

    .item__content {
        text-align: left;
        width: 45%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .item__name,
    .item__description {
        text-align: left;
        max-width: 30rem;
    }

    @media only screen and (min-width: 1200px) {
        .collection {
            margin-top: 16rem;
        }

        .collection__header {
            font-size: 15rem;
            opacity: .2;
        }

        .collection__list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }

        .collection__item {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .item__img {
            width: 60%;
        }

        .item__content {
            width: 80%;
        }

        .item__name,
        .item__description {
            text-align: center;
        }
    }
}
</style>