<template>
    <section class="reason">
        <div class="reason__background"></div>
        <h2 class="reason__header" v-text="headerText"></h2>
        <p class="reason__paragraph" v-text="reasonTxt"></p>
        <ul class="reason__list">
            <li class="list__item" v-for="reason in reasons" :key="reason.name">
                <div class="icon-wrapper">
                    <p class="list__icon" v-html="reason.icon"></p>
                </div>
                <div class="item__content">
                    <h3 class="item__header" v-text="reason.name"></h3>
                    <p class="item__paragraph" v-text="reason.description"></p>

                </div>
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

.reason__background {
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
    margin: 3rem;
    padding: 8em 5rem;
    text-align: center;
    background-color: var(--dark-cyan);
    border-radius: 1rem;

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

@media only screen and (min-width: 768px) {
    .reason__paragraph {
        width: 75%;
        padding-bottom: 4rem;
    }

    .reason__background {
        height: 60rem;
    }

    .reason__list {
        margin-top: 2rem;
        width: 85%;
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
    }

    .list__item {
        margin: 1.4rem 3rem;
        padding: 4rem 3.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: auto;
        width: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .icon-wrapper {
        position: relative;

    }

    .list__icon {
        margin-left: 3rem;
        position: absolute;
        left: 0;
        top: 50%;
        font-size: 6rem;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .item__header {
        margin-bottom: 1.5rem;
    }

    .item__content {
        width: 70%;
        text-align: left;
        padding-right: 3rem;
    }

    .item__paragraph {
        opacity: .8;
        letter-spacing: .1rem;
        font-weight: 100;
        text-shadow: -.1rem -.1rem -.2rem var(--white);
    }

    @media only screen and (min-width: 1200px) {

        .reason{
            margin-top: 15rem;
        }
        .reason__header {
            font-size: 4.7rem;
        }

        .reason__list {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }

        .reason__paragraph {
            width: 45%;
        }

        .list__item {
            margin-left: 1rem;
            margin-right: 1rem;
            height: 42rem;
            width: 36rem;
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
        }

        .list__icon {
            all: initial;
            font-size: 6rem;
            color: var(--pale-orange);
            background-color: transparent;
        }

        .item__content {
            margin-top: 2rem;
            text-align: center;
            padding-right: 0;
        }
    }

}
</style>