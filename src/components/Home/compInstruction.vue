<template>
    <section class="instruction">
        <h2 class="instruction__header" v-text="textHeader"></h2>
        <comp-steps class="active"></comp-steps>
        <ul class="instruction__list">
            <li class="instruction__item" v-for="instruction in instructions" :key="instruction.index">
                <p class="item__index" v-text="instruction.index"></p>
                <h3 class="item__header" v-text="instruction.name"></h3>
                <p class="item__paragraph" v-text="instruction.description"></p>
            </li>
        </ul>
        <comp-button :text="text" class="btn"></comp-button>
    </section>
</template>

<script>


import compButton from '@/Utils/buttons/compButtonMain.vue';
import compSteps from '@/Utils/compSteps.vue';

export default {
components: {compButton, compSteps},
    data() {
        return {
            textHeader: 'How it works',
            text: 'Create your plane'

        }
    },

    computed: {
        instructions() {
            return this.$store.getters['home/getInstruction']
        }
    },

    mounted() {
        this.$store.dispatch('home/getInstruction')
    },
}
</script>

<style scoped>

.instruction{
text-align: center;    
}
.instruction__header{
    margin: 5rem 0;
    font-size: 2.6rem;
    font-weight: 800;
    color: var(--grey);
}

.item__index{
    font-size: 7.5rem;
    color: var(--pale-orange);
    font-family: 'Fraunces', serif;
    font-weight: 900;
}

.item__header{
    margin: 2rem 0;
    font-size: 2.7rem;
    font-weight: 800;
    color: var(--dark-grey-blue);
    opacity: .9;
}

.active{
    display: none;
}

.item__paragraph{
    font-size: 1.7rem;
    line-height: 2.8rem;
    font-weight: 100;
    opacity: .7;
    text-shadow: .3rem .3rem -.3rem;
    margin-bottom: 4rem;
}

.btn{
    margin: 4rem 0;
}


@media only screen and (min-width: 768px){
    .active{
    display: flex;
}
    .instruction{
        margin-top: 10rem;
        text-align: left;
    }
    .instruction__list{
        margin-top: 3.5rem;

        display: flex;
        justify-content: space-around;
    }
    .instruction__item{
        width: 30%;
    }
    .btn{
        margin-top: 0rem;
    }

}
</style>