<template>
    <div class="wrapper">
        <comp-header />
        <main>
            <comp-loader v-if="isLoader" />
            <router-view v-if="isKeepAlive" v-slot="{Component}">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
            <router-view v-else></router-view>
            <comp-side-menu />
        </main>
        <comp-footer />
    </div>
</template>

<script>
import CompHeader from './components/Header/compHeader.vue';
import CompSideMenu from './components/Menu/compSidemenu.vue';
import {mapGetters} from 'vuex';

export default {
    components: {CompHeader, CompSideMenu},

    computed: {
        ...mapGetters({
            isLoader: 'load/getLoader',
            isKeepAlive: 'home/getKeepAlive',
        }),
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    text-decoration: none;
}

html {
    font-size: 62.5%;
}

img {
    max-width: 100%;
}

.wrapper {
    margin: 0 auto;
    max-width: 145rem;
    position: relative;
    padding: 2rem;
}

.d-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

li,
p {
    font-family: 'Barlow', sans-serif;
}

h1,
h2,
h3,
h4 {
    font-family: 'Fraunces', serif;
}

:root {
    --dark-cyan: #0e8784;
    --dark-cyan-hover: #4ce1df;
    --dark-grey-blue: #333d4b;
    --pale-orange: #fdd6ba;
    --light-cream: #f4f2eb;
    --grey: #616163;
    --light-grey: #969698;
    --white: #ffff;
}

.main {
    position: relative;
    z-index: 3;
}

/* accordion*/
.accordion-list .accordion-item--open > .accordion-item__summary,
.accordion-list .accordion-item {
    background-color: var(--white) !important;
    border: none !important;
}

.accordion-item__summary-icon--default {
    display: none;
}

@media only screen and (min-width: 768px) {
    .wrapper {
        padding: 3.5rem;
    }

    .accordion-list .accordion-item > .accordion-item__content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
}
</style>
