<template>
    <section>
        <base-section header="WHY DEEP NETWORK?"
            secondHeader="Explore what makes us the ideal technology consulting and solutions partner."
            text="Here are the six standout reasons that differantiate us </br>from the competition."
            class="central-item">
            <div class="model-grid">
                <div class="model-box">
                    <div class="image-background">
                        <img :src="require('@/assets/images/homepage/business-model/1.svg')" alt="">
                    </div>
                    <p>We are a software company, not an agency that relies on freelance contractors.</p>
                </div>
                <div class="model-box">
                    <div class="image-background">
                        <img :src="require('@/assets/images/homepage/business-model/2.svg')" alt="">
                    </div>
                    <p>We bring broad experience and offer a "one-stop shop" for all Microsoft Azure projects.</p>
                </div>
                <div class="model-box">
                    <div class="image-background">
                        <img :src="require('@/assets/images/homepage/business-model/3.svg')" alt="">
                    </div>
                    <p>As a MS Gold Partner, our team stays current with the latest Azure technology trends.</p>
                </div>
                <div class="model-box">
                    <div class="image-background">
                        <img :src="require('@/assets/images/homepage/business-model/4.svg')" alt="">
                    </div>
                    <p>Whether you need 1 or 20 engineers, we can scale your project quickly and efficiently.</p>
                </div>
                <div class="model-box">
                    <div class="image-background">
                        <img :src="require('@/assets/images/homepage/business-model/5.svg')" alt="">
                    </div>
                    <p>Customers can select highly qualified candidates through CVs and conduct interviews before
                        hiring.</p>
                </div>
                <div class="model-box">
                    <div class="image-background">
                        <img :src="require('@/assets/images/homepage/business-model/6.svg')" alt="">
                    </div>
                    <p>Immediate access to skilled resources onsite, onshore, or nearshore (EU or Turkey), fully
                        GDPR-compliant.</p>
                </div>
            </div>
        </base-section>
    </section>
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
    background-color: var(--light-blue);
}

.model-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
}

.model-box {
    width: 289px;
    height: 237px;

    padding: 1rem;

    background-color: white;

    border-radius: 10px;
    isolation: isolate;
}

.model-box .image-background {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 65px;
    height: 65px;

    border-radius: 50%;
    background-color: var(--dark-blue);
}

.model-box img {
    filter: invert(100%);
}

.model-box p {
    padding: 1rem 0;
    color: var(--text-grey);

    line-height: 1.5;

    font-size: 18px;
    font-weight: 300;
}
</style>
