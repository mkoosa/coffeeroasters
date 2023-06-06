<template>
    <div class="about-us__details">
        <ul class="details__container">
            <li class="details__element" v-for="detail in details" :key="detail.name"
                :class="createClassDetailsElement(detail.name)">
                <img :src="detail.imgMobile" alt="" class="details__img">
                <div class="details__content">
                    <h2 v-text="detail.name" class="details__header"></h2>
                    <p v-text="detail.description" class="details__paragraph"></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>


export default {


    computed: {
        details() {
            return this.$store.getters['about/getCommitmentContent']
        }
    },
    mounted() {
        return this.$store.dispatch('about/getCommitmentContent')
    },

    methods: {
        createClassDetailsElement(value) {
            value = value.split(' ');
            console.log(value[1]);
            value = 'details__element--' + value[1]
            return value
        }

    }


}

</script>
<style scoped>
.details__container {
    color: var(--dark-grey-blue);
    text-align: center;
}

.details__element--quality {
    padding: 8rem 2rem 3rem 2rem;
    color: var(--white);
    border-radius: 1rem;
    position: relative;

}

.details__element--quality::after {
    position: absolute;
    left: 0;
    border-radius: 1rem;
    content: ' ';
    width: 100%;
    background-color: var(--dark-grey-blue);
    top: 15rem;
    height: 53rem;
    z-index: 10;
}

.details__img {
    border-radius: 1rem;
    position: relative;
    z-index: 20;
    margin-bottom: 4.5rem;
}
.details__content {
    position: relative;
    z-index: 30;
}

.details__header {
    margin: 1rem 0 3rem 0;
    font-size: 3.2rem;
    font-weight: 900;
}

.details__paragraph {
    text-align: center;
    line-height: 2.5rem;
    font-size: 1.5rem;
    letter-spacing: .1rem;
    font-weight: 200;
    opacity: .7;
    text-shadow: .1rem .1rem -.3rem
}

.details__paragraph {
    margin-bottom: 3rem;
}
</style>