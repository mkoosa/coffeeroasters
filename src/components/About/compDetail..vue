<template v-bind:detail="detail">
    <div :class="['detail', createClass(detail), { isPlan: isPlan, isHome: isHome }]">
        <picture>
            <source class="detail__img" media="(min-width: 768px) and (max-width: 1199px)" :srcset="detail.imgTablet">
            <source class="detail__img" media="(min-width: 1200px)" :srcset="detail.imgDesktop">
            <img class="detail__img" :src="detail.imgMobile">
        </picture>
        <div class="detail__content">
            <h2 class="detail__header">{{ detail.name }}</h2>
            <p class="detail__text">{{ detail.description }}</p>
            <slot></slot>
        </div>
    </div>
</template>
<script>

export default {
    props: ['detail', 'isPlan', 'isHome'],

    data() {
        return {
            some: 'detail'
        }
    },

    methods: {
        createClass(value) {
            if (!value) return;
            let { name } = value;
            name = name.split(' ');
            return name[1]
        }
    },
}

</script>

<style scoped>
.detail {
    border-radius: 1rem;
    text-align: center;
    overflow: hidden;

}

.detail.commitment {
    margin: 8rem 0 16rem 0;
}


.commitment .detail__header,
.quality .detail__header {
    margin: 4rem 0;
}

.detail__img {
    border-radius: 1rem;
    width: 100%;
}

.detail.us,
.coffee,
.a {
    position: relative;
    z-index: 10;
    color: var(--white);
}

.detail.us .detail__content,
.detail.coffee .detail__content,
.detail.a .detail__content {
    height: 38rem;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 75%;
}

.detail.a .detail__content{
    height: 24rem;
    
}

.detail.a.isPlan .detail__content,
.detail.coffee.isPlan .detail__content {
    width: 86%;
}

.detail.commitment {
    color: var(--dark-grey-blue);
}

.detail.quality {
    color: var(--white);
}

.quality .detail__content {
    transform: translateY(-6rem);
}

.detail.quality .detail__img {
    width: 80%;
    transform: translateY(-6rem);
}

.detail.quality .detail__content {
    padding: 0 2.8rem;
    position: relative;
    z-index: 20;
}

.quality {
    background-color: var(--dark-grey-blue);
}

.detail__header {
    font-size: 3rem;
    font-weight: 900;
    line-height: 3rem;
}

.isPlan .detail__header,
.isHome .detail__header {
    font-size: 4rem;
    line-height: 4rem;
}

.detail__text {
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 2.5rem;

}

@media only screen and (min-width: 768px) {
    .detail {
        margin-bottom: 14;
    }

    .detail.us,
    .detail.coffee,
    .detail.a {
        text-align: left;
    }

    .detail.us .detail__content,
    .detail.a .detail__content,
    .detail.coffee .detail__content,
    .detail.a.isPlan .detail__content {
        width: 50%;
        left: 35%;
        align-items: flex-start;
    }

    .detail.commitment {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .detail.commitment picture {
        flex-basis: 40%;
    }

    .detail.commitment .detail__content {
        flex-basis: 50%;
        text-align: left;
    }

    .detail.commitment .detail__header {
        margin: 3rem 0;
    }

    .detail.quality .detail__img {
        max-width: 70rem;
    }

    .detail.quality .detail__content {
        margin: 0 auto;
        max-width: 70%;
    }
}

@media only screen and (min-width: 1200px) {

    .detail {
        margin-bottom: 18rem;
    }


    .detail.commitment {
        margin-bottom: 30rem;
    }

    .detail.commitment .detail__header {
        margin: 0;
        margin-bottom: 3rem;
    }

    .detail.header {
        font-size: 4rem;
        line-height: 5rem;
        text-align: left;
        white-space: nowrap;
    }

    .detail.us .detail__content,
    .detail.a .detail__content,
    .detail.coffee .detail__content,
    .detail.a.isPlan .detail__content {
        width: 30%;
        left: 20%;
    }

    .detail.us .detail__content,
    .detail.us .detail__text,
    .detail.coffee .detail__text,
    .detail.a .detail__text {
        color: var(--white);
    }

    .detail.us .detail__img,
    .detail.a .detail__img {
        width: 100%;
    }

    .detail__text {
        text-align: left;
        font-size: 1.7rem;
    }

    .detail.quality {
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


    .detail.quality picture {
        order: 1;
        margin-top: -12rem;
        width: 40%;
    }

    .detail.quality .detail__content {
        order: 0;
        flex-basis: 40%;
        transform: initial;
    }

}
</style>

