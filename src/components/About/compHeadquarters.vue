<template>
    <section class="headquarters">
        <h2 class="headquarters__header">{{ header }}</h2>
        <ul class="headquarters__list">
            <li class="headquarters__element" v-for="headquarter in headquarters" :key="headquarter.icon">
                <img :src="headquarter.icon" :alt="headquarter.country" class="headquarters__img">
                <h3 v-text="headquarter.country" class="headquarters__country"></h3>
                <div class="country__details">
                    <p v-text="headquarter.street" class="headquarters__street"></p>
                    <p v-text="headquarter.city" class="headquarters__city"></p>
                    <p v-text="headquarter.zip" class="headquarters__zip"></p>
                    <p v-text="headquarter.mobile" class="headquarters__mobile"></p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {

    data() {
        return {
            header: 'Our headquarters'
        }
    },
    computed: {
        headquarters() {
            return this.$store.getters['about/getHeadquarters']

        }
    },
    mounted() {
        this.$store.dispatch('about/getHeadquarters')
    }
}

</script>

<style scoped>
.headquarters {
    text-align: center;
    margin-top: 17rem;
    color: var(--dark-grey-blue);
}

.headquarters__img{
    margin: 2rem 0;
}
.headquarters__header {
    margin: 6rem 0;
    font-size: 2.4rem;
    opacity: .5;
    font-weight: 800;
}

.headquarters__country {
    margin: 2rem 0;
    font-family: 'Fraunces', serif;
    font-size: 2.9rem;
    font-weight: 900;
    opacity: .9;
}

.country__details{
    margin-bottom: 6rem;
    text-transform: capitalize;
    font-size: 1.6rem;
    opacity: .9;
    text-shadow: .1rem .1rem -.3rem;
    line-height: 2.6rem;
}

</style>