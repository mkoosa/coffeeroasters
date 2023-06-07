<template v-bind:detail="detail">
    <div :class="['detail', createClass(detail.name)]">
        <picture>
            <source class="detail__img" media="(min-width: 768px)" :srcset="detail.imgTablet" alt="">
            <img class="detail__img" :src="detail.imgMobile" alt="">
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
    height: 50rem;
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

}</style>

