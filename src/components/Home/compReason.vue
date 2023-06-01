<template>
    <section class="reason">
    <div class="reason__background"></div>
        <h2 class="reason__header" v-text="headerText"></h2>
        <p class="reason__paragraph" v-text="reasonTxt"></p>
        <ul class="reason__list">
            <li class="list__item" v-for="reason in reasons" :key="reason.name">
                <p class="list__icon" v-html="reason.icon"></p>
                <h3 class="item__header" v-text="reason.name"></h3>
                <p class="item__paragraph" v-text="reason.description"></p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            headerText: 'Why choose us? ',
            reasonTxt: 'A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level. '
        }
    },

    mounted() {
        this.$store.dispatch('home/getReasons')
    },
    computed: {
        reasons() {
            return this.$store.getters['home/getReasons']
        }
    }

}
</script>

<style scoped>
.reason {
    width: 100%;
    /* height: 90rem; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
}

.reason__background{
    position: absolute;
    height: 90rem;
    background-color: var(--dark-grey-blue);
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 1rem;
}

.reason__list {
    color: var(--white);
    margin-top: 4rem;
    position: relative;
    z-index: 100;
}

.reason__header {
    margin: 6rem 0 3rem 0;
    color: var(--white);
    font-size: 2.9rem;
    font-weight: 800;
    font-family: 'Fraunces', serif;
    letter-spacing: .1rem;
    position: relative;
    z-index: 100;
}

.reason__paragraph {
    color: var(--light-cream);
    text-align: center;
    padding: 0 2.5rem;
    font-size: 1.5rem;
    letter-spacing: .1rem;
    opacity: .8;
    line-height: 2.6rem;
}

.list__item {
    text-align: center;
    margin: 2.5rem;
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
    background-color: var(--dark-cyan);
    height: 36rem;
    border-radius: 1rem;
    padding: 0 3.5rem;
}

.list__icon {
    margin-bottom: 4rem;
    color: var(--pale-orange);
    font-size: 7rem;
}

.item__header {
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.item__paragraph {
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 2.6rem;
}
</style>