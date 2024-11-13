<template>
    <section>
        <base-section header="CASE STUDIES" secondHeader="Latest insights from our <br/>experts" text="Stay informed with our recent blogs, covering industry trends, technology tips, and deep
            dives into cutting-edge solutions." class="central-item">
            <div id="case-study-wrapper">
                <div v-for="caseStudy in caseStudies" :key="caseStudy.header" class="case-study-cell">
                    <img :src="caseStudy.image" loading="lazy" alt="office">
                    <div class="case-study-metadata">
                        <time datetime="2020-01-01">{{ caseStudy.date }}</time>
                        <h2>{{ caseStudy.header }}</h2>
                        <a href="">Read more</a>
                    </div>
                </div>
            </div>
            <button class="classic-btn">See our case studies</button>
        </base-section>
    </section>
</template>

<script>
import BaseSection from '@/components/sections/common/BaseSection.vue';

export default {
    components: {
        BaseSection
    },
    data() {
        return {
            caseStudies: [
                {
                    date: "January 2020",
                    header: "How to Setup an ELK Stack and FileBeat on Kubernetes",
                    image: require("@/assets/images/homepage/case-studies/img-1.png")
                },
                {
                    date: "March 2020",
                    header: "Password protected EFK Stack on Kubernetes",
                    image: require("@/assets/images/homepage/case-studies/img-2.png")
                }
            ]
        };
    }
}

</script>

<style scoped>
section {
    align-items: center;
    text-align: center;

    position: relative;
}

.classic-btn {
    margin-top: 48px;

    width: 242px;
    align-self: center;
}

#case-study-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: 50px;
}

.case-study-cell {
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 570px;
    min-width: 400px;
    height: 431px;

    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 15px;

    border-radius: 15px;
    border: 1px solid transparent;

    box-shadow: 10px 10px 10px var(--shadow-color);
}

.case-study-cell:hover {
    border: 1px solid var(--dark-blue);
}

.case-study-cell img {
    object-fit: cover;

    height: 253px;
    width: 100%;

    border-radius: 15px 15px 0 0;
}

.case-study-metadata {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 178px;

    text-align: left;

    margin: 24px 40px;
}

.case-study-metadata time {
    font-size: 16px;
    font-weight: 200;
    color: var(--light-grey);
}

.case-study-metadata h2 {
    font-size: 18px;
}

.case-study-metadata a {
    font-size: 16px;
    color: var(--dark-blue);
    text-decoration: none;
}
</style>
