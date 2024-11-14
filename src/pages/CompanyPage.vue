<template>
        <header-section header="We are your trusted <br/> technology partners" text="Every great business needs reliable tech expertise, and we’re here to deliver scalable <br />
                solutions for your success." :backgroundImageUrl="backgroundImageUrl"></header-section>
        <about-us-section class="central-item large"></about-us-section>
        <image-divider :imageUrl="imageUrl"></image-divider>
</template>

<script>
import AboutUsSection from '@/components/sections/company/AboutUsSection.vue';
import ImageDivider from '@/components/modules/ImageDivider.vue';

export default {
        components: { AboutUsSection, ImageDivider },
        data() {
                return { 
                        backgroundImageUrl: require('@/assets/images/common/header/hero.png'),
                        imageUrl: require('@/assets/images/company/image.png')
                };
        }
}
</script>

<style>
section {
        text-align: center;
}
</style>