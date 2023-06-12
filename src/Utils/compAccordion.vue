<template>
    <Accordion-List>
        <Accordion-Item :preference="preference">
            <template #summary>
                <div class="question">
                    <h3 class="question__header" v-text="preference.question"></h3>
                    <!-- <i class="fas fa-solid fa-angle-down fa-lg question__arrow"></i> -->
                </div>
            </template>
            <template #icon><i class="fas fa-solid fa-angle-down question__arrow"></i></template>
            <div class="answer" v-for="answer in preference.answears" :key="answer.name">
                <h4 class="answer__header" v-text="answer.name"></h4>
                <p class="answer__text" v-text="answer.description"></p>
            </div>
        </Accordion-Item>
    </Accordion-List>
</template>

<script>
import { AccordionList, AccordionItem } from "vue3-rich-accordion";
export default {
    components: { AccordionList, AccordionItem },
    props: ['preference']
}

</script>

<style scoped>
#summary {
    border: none;
}

.items {
    display: flex;
}

.question {
    display: flex;
    align-items: center;
}

.question__arrow {
    color: var(--dark-cyan);
    font-size: 2.2rem;

}


.question__header {
    text-align: left;
    font-size: 2.5rem;
    flex-basis: 80%;
    color: var(--grey);
    font-weight: 900;
    opacity: .8;
}

.answer {
    text-align: left;

}

.answer {
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 1rem;
    background-color: var(--light-cream) !important;
}


.answer__header {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: var(--dark-grey-blue);
    font-weight: 800;
    opacity: .8;

}

.answer__text {
    font-size: 1.6rem;
    opacity: .8;
}
</style>