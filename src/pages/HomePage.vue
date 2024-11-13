<template>
    <header-section 
        header="Empowering your business with <br/>Cloud, AI and Big Data solutions."
        text="Every great business needs reliable tech expertise, and we’re here to deliver scalable solutions for your success."
        buttonText="Get to know us"
        :backgroundImageUrl="imageUrl" ></header-section>
    <services-section></services-section>
    <technology-section></technology-section>
    <business-model-section></business-model-section>
    <case-studies-section></case-studies-section>
    <lets-talk-section></lets-talk-section>
    <testimonials-section></testimonials-section>
    <footer-section></footer-section>
</template>

<script>
import ServicesSection from '@/components/sections/homepage/ServicesSection.vue';
import TechnologySection from '@/components/sections/common/TechnologySection.vue';
import BusinessModelSection from '@/components/sections/homepage/BusinessModelSection.vue';
import CaseStudiesSection from '@/components/sections/homepage/CaseStudiesSection.vue';
import LetsTalkSection from '@/components/sections/common/LetsTalkSection.vue';
import TestimonialsSection from '@/components/sections/homepage/TestimonialsSection.vue';

export default{
    components: {
        ServicesSection,
        TechnologySection,
        BusinessModelSection,
        CaseStudiesSection,
        LetsTalkSection,
        TestimonialsSection
    },
    props: {},
    data(){
        return {
            imageUrl: require('@/assets/images/common/header/hero.png')
        }
    },
    methods: {}

}
</script>

<style>

</style>