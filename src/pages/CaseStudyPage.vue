<template>
    <header-section 
        header="Latest insights from our experts" 
        text="Stay informed our recent blogs, covering industry
        trends, technology tips, and deep dives into cutting-egde solutions."
        :backgroundImageUrl="imageUrl"
        :isFull="false"></header-section>
    <filtered-cards-section></filtered-cards-section>
    <footer-section></footer-section>
</template>

<script>
import FilteredCardsSection from '@/components/sections/common/FilteredCardsSection.vue';

export default {
    components: {
        FilteredCardsSection
    },
    data() {
        return {
            tags: ["All", "Tech", "Software", "Security"],
            caseStudies: [
                {
                    date: "January 2020",
                    title: "How to Setup an ELK Stack and FileBeat on Kubernetes",
                    imageUrl: require("@/assets/images/homepage/case-studies/img-1.png")
                },
                {
                    date: "March 2020",
                    title: "Password protected EFK Stack on Kubernetes",
                    imageUrl: require("@/assets/images/homepage/case-studies/img-2.png")
                }, {
                    date: "January 2020",
                    title: "How to Setup an ELK Stack and FileBeat on Kubernetes",
                    imageUrl: require("@/assets/images/homepage/case-studies/img-1.png")
                },
                {
                    date: "March 2020",
                    title: "Password protected EFK Stack on Kubernetes",
                    imageUrl: require("@/assets/images/homepage/case-studies/img-2.png")
                }
            ],
            imageUrl: require('@/assets/images/common/header/hero.png')
        };
    },
    provide() {
        return {
            tags: this.tags,
            cards: this.caseStudies
        };
    }
}
</script>