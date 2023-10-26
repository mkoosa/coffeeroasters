<template>
    <section class="instruction">
        <slot></slot>
        <slot name="home"></slot>
        <div
            class="instruction__content"
            :style="{
                color: palette.color,
                backgroundColor: palette.backgroundColor,
            }"
        >
            <slot name="plan"></slot>
            <ul class="instruction__list">
                <li
                    :instructions="instructions"
                    class="instruction__item"
                    v-for="instruction in instructions"
                    :key="instruction.index"
                >
                    <p class="item__index" v-text="instruction.index"></p>
                    <h3 class="item__header" v-text="instruction.name"></h3>
                    <p
                        class="item__paragraph"
                        v-text="instruction.description"
                    ></p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        instructions: [Object, String],
        palette: Object,
    },

    data() {
        return {
            btnTxt: 'Create your plane',
        };
    },
};
</script>

<style scoped>
/* section home  */
.instruction {
    text-align: center;
    position: relative;
}

.instruction__list {
    border-radius: 1rem;
    padding: 0 3rem;
}

.instruction :slotted(.instruction__header) {
    margin: 5rem 0;
    font-size: 2.6rem;
    font-weight: 800;
    color: var(--grey);
}

.item__index {
    font-size: 7.5rem;
    color: var(--pale-orange);
    font-family: 'Fraunces', serif;
    font-weight: 900;
}

.item__header {
    margin: 2rem 0;
    font-size: 2.7rem;
    font-weight: 800;
    opacity: 0.9;
}

.active {
    display: none;
}

.item__paragraph {
    font-size: 1.6rem;
    line-height: 2.8rem;
    font-weight: 100;
    text-shadow: 0.3rem 0.3rem -0.3rem;
    margin-bottom: 4rem;
}

.btn {
    margin: 4rem 0;
}

/* section plan  */
.plan .instruction__content {
    max-width: 145rem;
    margin: 6rem 0 0 0;
    padding: 6rem 3rem;
    position: relative;
    width: 100vw;
    left: -2rem;
    border-radius: 1rem;
}

@media only screen and (min-width: 768px) {
    .active {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .instruction {
        text-align: left;
    }

    .instruction__list {
        margin-top: 3.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .instruction__item {
        width: 30%;
    }

    .btn {
        margin-top: 0rem;
    }

    .plan .instruction__content {
        left: -3.5rem;
        margin: 9rem 0 0 0;
    }
}

@media only screen and (min-width: 1200px) {
    .instruction {
        margin: 10rem 0 12rem 0;
    }
}
</style>
