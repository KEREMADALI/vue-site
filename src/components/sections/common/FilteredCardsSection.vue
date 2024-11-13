<template>
    <section>
        <filter-bar :tags="tags" class="filter-bar"></filter-bar>
        <case-studies :cards="caseStudies" class="case-studies central-item"></case-studies>
    </section>
</template>

<script>
import TagBar from '@/components/modules/TagBar.vue';
import CardGroup from '@/components/modules/CardGroup.vue';

export default {
    components: {
        'filter-bar': TagBar,
        'case-studies': CardGroup
    },
    props: ['tags', 'caseStudies']
}
</script>

<style scoped>
section{
    margin-top: 60px;
    margin-bottom: 100px;
}

section > *:not(:last-child){
    margin-bottom: 100px;
}
</style>