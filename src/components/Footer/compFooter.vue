<template>
    <footer class="footer">
        <comp-logo class="bigger"></comp-logo>
        <ul class="footer__nav-list">
            <li class="nav-list__item" v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
        <div>
        <ul class="footer__menu-list">
            <li class="menu-list__item" v-for="icon in icons" :key="icon" v-html="icon"></li>
        </ul>
        </div>
    </footer>
</template>

<script>
import compLogo from '@/Utils/compLogo.vue';

export default {
    components: {
        compLogo
    },

    data() {
        return {
            details: ['home', 'about us', 'create your plane'],
            icons: ['<i class="fas fa-brands fa-square-facebook"></i>',
                '<i class="fas fa-brands fa-twitter"></i>',
                '<i class="fas fa-brands fa-instagram"></i>'
            ]
        }
    }
}

</script>

<style scoped>
.footer {
    color: var(--white);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-grey-blue);
    aspect-ratio: 3 / 3.3;
    margin: 7rem 0 3rem 0 ;
}

.footer__nav-list{
    margin: 5rem 0;
}

.nav-list__item{
    font-size: 1.3rem;
    text-transform: uppercase;
    color: var(--grey);
    opacity: .9;
    font-family: 'barlow, serif';
    font-weight: 600;
}

.nav-list__item:nth-child(2){
    margin: 2.5rem 0;
}
.menu-list__item{
    display: inline-block;
    font-size: 3rem;
}

.menu-list__item:nth-child(2){
    margin: 0 3rem;
}


</style>