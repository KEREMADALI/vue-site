<template>
        <header-section 
        header="Empowering your business with <br />our comprehensive product offerings."
        text="Explore our diverse range of products designed to drive efficiency, security and growth in <br />your
                organization."
        :backgroundImageUrl="imageUrl" ></header-section>
        <services-section></services-section>
        <ways-of-work-section></ways-of-work-section>
        <technology-section></technology-section>
        <lets-talk-section marginTop="-100px"></lets-talk-section>
    <footer-section></footer-section>
</template>

<script>
import ServicesSection from '@/components/sections/services/ServicesSection.vue';
import WaysOfWorkSection from '@/components/sections/services/WaysOfWorkSection.vue';
import TechnologySection from '@/components/sections/common/TechnologySection.vue';
import LetsTalkSection from '@/components/sections/common/LetsTalkSection.vue';


export default{
    components: {
        ServicesSection,
        WaysOfWorkSection,
        TechnologySection,
        LetsTalkSection
    },
    props: {},
    data(){
        return {
            imageUrl: require('@/assets/images/services/hero.png')
        }
    },
    methods: {}
}
</script>

<style>
.lets-talk-section{
    margin-top: -100px;
}
</style>

