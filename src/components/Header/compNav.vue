<template>
    <ul class="nav-list" :class="$attrs.class">
        <li tabindex="0" :class="['nav-list__item', { 'nav-list__item--footer': footer, 'nav-list__item--side': side }]"
            v-for="detail in details" :key="detail">{{
                detail }}</li>
    </ul>
</template>

<script>
export default {
    props: ['footer', 'side'],
    data() {
        return {
            details: ['home', 'about us', 'create your plane'],
        }
    }
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

.nav-list--side {
    padding-left: 2rem;
    padding-top: 5rem;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: flex-start;
    text-transform: uppercase;
    color: var(--grey) !important;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    height: 17rem;
    white-space: nowrap;
}

.nav-list__item--footer {
    color: var(--grey) !important;
    margin: 1.3rem 0;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
}

.nav-list__item--side {
    color: var(--grey) !important;
    margin: 1.3rem 0;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    opacity: .8;
    transition: opacity .1s;
}

.nav-list__item--side:hover {
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
}

@media only screen and (min-width: 1200px) {
    .nav-list {
        width: 40rem;
    }
    .nav-list__item {
        font-size: 1.4rem;
    }
}</style>