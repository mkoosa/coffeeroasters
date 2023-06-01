<template>
    <div class="introduction">
        <div class="introduction__content d-flex">
            <h2 class="introduction__header">Great coffee made simple.</h2>
            <p class="introduction__text">Start your mornings with the world’s best coffees. Try our expertly curated
                artisan
                coffees from our best roasters delivered directly to your door, at your schedule.
            </p>
            <btn-main :text="text">
            </btn-main>
        </div>
    </div>
</template>

<script>
import btnMain from '@/Utils/buttons/compButtonMain.vue';
export default {
    components: { btnMain },
    data() {
        return {
            text: 'Create your plane'
        }
    },
}
</script>

<style scoped>
.introduction {
    background-image: url(../../assets/home/mobile/image-hero-coffeepress.jpg);
    background-repeat: no-repeat;
    height: 50rem;
    width: 100%;
    border-radius: 1rem;
    background-size: cover;
    background-position: center;
    position: relative;
}
.introduction__content {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    color: var(--white);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 2rem;
}

.introduction__header {
    text-align: center;
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 800;
    font-family: 'Fraunces', serif;

}

.introduction__text {
    width: 80%;
    padding: 3rem 0;
    text-align: center;
    font-size: 1.4rem;
    line-height: 2.6rem;
    color: var(--light-cream);
    opacity: .8;
    letter-spacing: .2rem;
    font-family: 'barlow, serif';
    font-weight: 100;
    text-shadow: .3rem .3rem -.3rem;
}
</style>