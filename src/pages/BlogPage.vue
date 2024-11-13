<template>
    <header-section 
        header="Our insights and expertise for the community"
        text="Every great business needs reliable tech expertise, and we’re here to deliver scalable solutions for your success."
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
                }, {
                    date: "January 2020",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores.",
                    imageUrl: require("@/assets/images/homepage/case-studies/img-1.png")
                },
                {
                    date: "March 2020",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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


<style>
:root {
    --darker-blue: #072249;
    --dark-blue: #0062AF;
    --light-blue: #F7FBFF;
    --text-grey: #595959;
    --light-grey: #999999;
    --shadow-color: #DEEBF7;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: "Inter", Helvetica, sans-serif;
}

body {
    overflow-x: hidden;
}

.central-item {
    max-width: 960px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.central-item.large {
    max-width: 1200px;
}

.classic-btn {
    background-color: var(--dark-blue);
    color: white;

    width: 192px;
    height: 45px;
    border-radius: 25px;
    border: none;

    font-size: 1.1rem;
    font-weight: 200;
}
</style>