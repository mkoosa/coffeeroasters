<template v-bind:detail="detail">
    <div :class="['detail', createClass(detail.name)]">
        <picture>
            <source class="detail__img" media="(min-width: 768px) and (max-width: 1199px)" :srcset="detail.imgTablet"
                alt="coffee">
            <source class="detail__img" media="(min-width: 1200px)" :srcset="detail.imgDesktop" alt="coffee">
            <img class="detail__img" :src="detail.imgMobile" alt="coffee">
        </picture>
        <div class="detail__content">
            <h2 class="detail__header">{{ detail.name }}</h2>
            <p class="detail__text">{{ detail.description }}</p>
        </div>
    </div>
</template>
<script>

export default {
    props: ['detail'],

    methods: {
        createClass(value) {
            return 'detail--' + value.split(' ')[1]
        }
    },
}

</script>

<style scoped>
.detail {
    border-radius: 1rem;
    margin-bottom: 10rem;
    text-align: center;
}

.detail__img {
    border-radius: 1rem;
}

.detail--us {
    position: relative;
    z-index: 10;
    color: var(--white);
}

.detail--us .detail__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 75%;
}

.detail--commitment {
    color: var(--dark-grey-blue);
}

.detail--quality {
    position: relative;
    color: var(--white);
}

.detail--quality .detail__img {
    margin-bottom: 2em;
    width: 80%;
    position: relative;
    z-index: 20;
}

.detail--quality .detail__content {
    padding: 0 2.8rem;
    position: relative;
    z-index: 20;
}

.detail--quality::after {
    top: 8rem;
    left: 0;
    content: '';
    width: 100%;
    border-radius: 1rem;
    background-color: var(--dark-grey-blue);
    position: absolute;
    height: 50em;
    z-index: 10;
}

.detail__header {
    margin: 4rem 0;
    font-size: 3rem;
    font-weight: 900;
    line-height: 3rem;
    margin-bottom: 2.5rem;
}

.detail__text {
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 2.5rem;
}

@media only screen and (min-width: 768px) {
    .detail--us {
        text-align: left;
    }

    .detail--us .detail__content {
        width: 50%;
        left: 35%;
    }

    .detail--commitment {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .detail--commitment picture {
        flex-basis: 40%;
    }

    .detail--commitment .detail__content {
        flex-basis: 50%;
        text-align: left;
    }

    .detail--commitment .detail__header {
        margin: 0;
    }

    .detail--quality::after {
        height: 55rem;
    }

    .detail--quality .detail__img {
        max-width: 70rem;
    }

    .detail--quality .detail__content {
        margin: 0 auto;
        max-width: 70%;
    }
}

@media only screen and (min-width: 1200px) {

    .detail {
        margin-bottom: 18rem;
    }

    .detail--commitment {
        margin-bottom: 30rem;
    }

    .detail--commitment .detail__header {
        margin: 0;
        margin-bottom: 3rem;
    }

    .detail__header {
        font-size: 4rem;
        line-height: 5rem;
        text-align: left;
        white-space: nowrap;
    }

    .detail--us .detail__content {
        width: 30%;
        left: 20%;
    }

    .detail--us .detail__text {
        color: var(--white);
    }

    .detail__img {
        max-width: 100%;
    }

    .detail--us .detail__img {
        width: 100%;
    }

    .detail__text {
        text-align: left;
        font-size: 1.7rem;

    }

    .detail--quality {
        padding-bottom: 10rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
        justify-content: space-evenly;
        color: var(--white);
        background-color: var(--dark-grey-blue);
    }

    .detail--quality::after {
        display: none;
    }

    .detail--quality picture {
        order: 1;
        margin-top: -12rem;
        width: 40%;
    }

    .detail--quality .detail__content {
        order: 0;
        flex-basis: 40%;
    }

}
</style>

