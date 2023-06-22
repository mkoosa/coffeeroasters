<template>
    <div class="schedule">
        <ul class="schedule__list">
            <li class="schedule__element" v-for="el in schedule" :key="el.index"><span class="index-element">{{ el.index
            }}</span> {{ el.text }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        schedule() {
            return this.$store.getters['plan/getSchedule']
        }
    },

    mounted() {
        this.$store.dispatch('plan/getSchedule')
    }
}
</script>

<style scoped>
.schedule {
    display: none;
    flex-basis: 25%;
}

@media only screen and (min-width: 1200px) {
    .schedule {
        display: block;
        margin-right: 10rem;    
    }

    .schedule__list {
        text-align: left;
        margin-left: 1rem;
    }

    .schedule__element {
        padding: 2rem 3rem 3rem 0;
        font-size: 2.2rem;
        border-bottom: .1rem solid var(--light-grey);
        font-family: 'Fraunces', serif;
        font-size: 2.4rem;
        font-weight: 800;
        transition: color .1s;
        color: var(--light-grey);
        cursor: pointer;
        white-space: nowrap;
    }

    .schedule__element:hover {
        color: var(--dark-grey-blue);
    }

    .schedule__element:last-child {
        border-bottom: none;
    }

    .index-element {
        margin-right: 2rem;
    }

}
</style>