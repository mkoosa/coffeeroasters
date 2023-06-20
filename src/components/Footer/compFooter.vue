<template>
    <footer class="footer">
        <comp-logo class="bigger"></comp-logo>
        <comp-nav class="nav-list--footer" :footer="footer"></comp-nav>
        <div>
            <ul class="footer__menu-list">
                <li tabindex="0" class="menu-list__item" z-index="0" v-for="icon in icons" :key="icon" v-html="icon"></li>
            </ul>
        </div>
    </footer>
</template>

<script>
import CompLogo from '@/Utils/CompLogo.vue';
import CompNav from '../Header/CompNav.vue';

export default {
    components: {
        CompLogo, CompNav
    },

    data() {
        return {
            icons: ['<i class="fas fa-brands fa-square-facebook"></i>',
                '<i class="fas fa-brands fa-twitter"></i>',
                '<i class="fas fa-brands fa-instagram"></i>'
            ]
            ,
            footer: true
        }
    }
}

</script>

<style scoped>
.footer {
    color: var(--white);
    text-align: center;
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: var(--dark-grey-blue);
    aspect-ratio: 3 / 3.3;
    margin: 7rem 0 3rem 0;
}

.menu-list__item {
    display: inline-block;
    font-size: 3rem;
    cursor: pointer;
    transition: color .2s;
}

.menu-list__item:hover {
    color: var(--pale-orange);
}

.menu-list__item:nth-child(2) {
    margin: 0 3rem;
}

@media only screen and (min-width: 600px) {
    .footer {
        aspect-ratio: 3 / 2;
    }
}

@media only screen and (min-width: 768px) {
    .footer {
        padding: 4rem 0;
        aspect-ratio: initial;
    }

    .footer__nav-list {
        margin: 0 0 2rem 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 35rem;
    }

    .footer__menu-list {
        margin-top: 4rem;
    }
}

@media only screen and (min-width: 1200px) {
    .footer {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-pack: distribute;
        justify-content: space-around;

    }

    .footer__menu-list {
        margin-top: 0rem;
    }
}
</style>