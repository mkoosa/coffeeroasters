<template>
    <div class="schedule">
        <ul class="schedule__list">
            <li
                class="schedule__element"
                v-for="el in schedule"
                :key="el.index"
                ref="items"
            >
                <span class="index-element">{{ el.index }}</span> {{ el.text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        schedule() {
            return this.$store.getters['plan/getSchedule'];
        },
        userPreferences() {
            return this.$store.state.plan.userPreferences;
        },
    },

    watch: {
        userPreferences: {
            handler() {
                const indexes = this.userPreferences
                    .map((item, index) => (item !== '' ? index : null))
                    .filter((item) => item !== null);
                this.setClass(indexes);
            },
            deep: true,
        },
    },

    methods: {
        setClass(indexes) {
            let elements = this.$refs.items;
            elements.forEach((el) => el.classList.remove('active'));
            for (let i = 0; i < indexes.length; i++) {
                elements.forEach((element, index) => {
                    if (indexes[i] === index) {
                        element.classList.add('active');
                    }
                });
            }
        },
    },

    mounted() {
        this.$store.dispatch('plan/getSchedule');
    },
};
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
        border-bottom: 0.1rem solid var(--light-grey);
        font-family: 'Fraunces', serif;
        font-size: 2.4rem;
        font-weight: 800;
        transition: color 0.1s;
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

    .active span {
        color: var(--dark-cyan);
        opacity: 0.8;
    }
}
</style>
