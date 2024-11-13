<template>
    <base-section header="" secondHeader="Let's talk about how we can help" text="Whether you're looking to migrate your legacy solutions to the cloud, implement AI solutions,
            or optimize your data analytics, our team is here to support you.  </br>

            We offer flexible engagements, either by providing skilled specialists for ongoing support or
            delivering comprehensive, milestone-driven projects for end-to-end solutions">
        <button class="classic-btn">Contact us</button>
    </base-section>
</template>

<script>
import BaseSection from '@/components/sections/common/BaseSection.vue';

export default {
    components: {
        BaseSection
    }
}
</script>

<style scoped>
section {
    text-align: center;

    position: relative;

    background: linear-gradient(180deg, rgba(7, 34, 73, 0.7), rgba(7, 34, 73, 1));

    color: white;

    padding-top: 350px;
    margin-top: -150px;

    z-index: -1;
}

section::before {
    position: absolute;

    top: 0;

    width: 100%;
    height: 300px;

    content: "";
    z-index: 2;
    left: 0;
    background-color: white;

    border-radius: 100% 0% 100% 0% / 0% 0% 100% 100%;
}

section * {
    color: white;
}

.classic-btn{
    align-self: center;

    margin-top: 1.5rem;
}
</style>
