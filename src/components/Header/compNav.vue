<template>
    <ul class="nav-list" :class="['$attrs.class', { 'active': isSideMenuActive }]" @click="activateAlive" role="navigation"
        :aria-label="setAriaLabel()">
        <li tabindex="0" :class="['nav-list__item', { 'nav-list__item--footer': footer, 'nav-list__item--side': side }]"
            v-for="detail in details" :key="detail">
            <router-link :to="{ name: detail, hash: '#summary' }" @click="hideSideMenu">
                {{ detail }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        footer: Boolean,
        side: Boolean
    },

    data() {
        return {
            details: ['home', 'about us', 'create your plane'],
        }
    },
    methods: {
        hideSideMenu() {
            this.$store.dispatch('side/hideSideMenu', false)
        },

        activateAlive() {
            this.$store.dispatch('home/getKeepalive', true);
        },

        setAriaLabel() {
            return this.footer ? 'Footer' : 'Main';
        }
    },

    computed: {
        isSideMenuActive() {
            return this.$store.getters['side/getSideMenu']
        }
    },
}

</script>

<style scoped>
.nav-list {
    width: 30rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    display: none;
}

.nav-list--footer {
    padding: 3rem 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.nav-list__item--footer {
    margin: 1.3rem 0;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
}

.nav-list__item--footer a {
    color: #f3f3f3;
}

.nav-list--side {
    margin-top: 3rem;
    height: 23rem;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: space-evenly;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.3rem;
    text-transform: capitalize;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    color: var(--grey);
}

.nav-list--side a {
    font-family: 'Fraunces', serif;
    color: var(--dark-grey-blue);
    font-size: 2.3rem;
    font-weight: 900;
    opacity: 0;
}

.active.nav-list--side a {
    display: block;
    opacity: 1;
    transition: all 1s .3s;
}

.nav-list__item--side {
    margin: 1.3rem 0;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    opacity: .8;
    transition: opacity .1s;
}

.nav-list__item--side a {
    color: var(--grey);
}

.nav-list__item--side:hover {
    opacity: 1;
}

.nav-list--header li a {
    color: var(--grey);
    opacity: .9;
}

.nav-list--header li a:hover {
    color: var(--grey);
    opacity: 1;
}

@media only screen and (min-width: 600px) {
    .hamburger {
        display: none;
    }

    .nav-list {
        margin-left: 1rem;
        padding: 1rem 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .nav-list__item {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 600;
        opacity: .7;
        text-shadow: .2rem .2rem -2rem;
        cursor: pointer;
        color: var(--dark-grey-blue);
        transition: opacity .1s;
    }

    .nav-list__item:nth-child(2) {
        margin: 0 1rem;
    }

    .nav-list__item:hover {
        transition: opacity .1s;
        opacity: 1;
        font-weight: 800;
    }
}

@media only screen and (min-width: 768px) {
    .nav-list--footer {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    .nav-list__item {
        margin: 0rem;
    }
}

@media only screen and (min-width: 1200px) {
    .nav-list {
        width: 40rem;
    }

    .nav-list__item {
        font-size: 1.4rem;
    }
}
</style>