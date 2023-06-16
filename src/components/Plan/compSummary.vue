<template>
    <div :class="['summary', { 'summary--summary': summary, 'summary--checkout': checkout }]">
        <h2 :class="['summary__header', { 'summary__header--summary': summary, 'summary__header--checkout': checkout }]">{{
            headerTxt }}</h2>
        <p :class="['summary__content', { 'summary__content--summary': summary, 'summary__content--checkout': checkout }]">
            “I drink my coffee as a <span v-if="userPreferences[0]">{{ userPreferences[0] }}</span><span v-else>__</span>
            , with a <span v-if="userPreferences[1]">{{
                userPreferences[1] }}</span><span v-else>__</span>
            type of bean. <span v-if="userPreferences[2]">{{ userPreferences[2] }}</span><span v-else>__</span>
            ground ala <span v-if="userPreferences[3]">{{ userPreferences[3] }}</span><span v-else>__</span>,
            sent to me <span v-if="userPreferences[4]">{{ userPreferences[4] }}</span><span v-else>__</span>.”
        </p>
        
    </div>
</template>

<script>

export default {
    props: ['summary', 'checkout'],

    data() {
        return {
            headerTxt: 'order summary',
        }
    },

    computed: {
        userPreferences() {
            return this.$store.getters['plan/getUserPreferences']
        }
    },
}
</script>

<style scoped>
.summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 9rem 0 7rem 0;
    background-color: var(--dark-grey-blue);
    color: var(--white);
    border-radius: 1rem;
    text-align: left;

}

.summary--summary {
    padding: 6rem 2rem;
}

.summary__header--summary {
    margin-bottom: 1.5rem;
    color: var(--light-grey);
    font-family: 'Barlow', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;

}

.summary__content--summary {
    font-size: 2.9rem;
    font-weight: 800;
    font-family: 'Fraunces', serif;
    line-height: 4.7rem;

}

.summary__content--summary span {
    text-transform: capitalize;
    font-size: 3.1rem;
    color: var(--dark-cyan);

}
</style>