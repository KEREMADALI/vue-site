<template>
        <header-section header="We are your trusted <br/> technology partners" text="Every great business needs reliable tech expertise, and we’re here to deliver scalable <br />
                solutions for your success." :backgroundImageUrl="backgroundImageUrl"></header-section>
        <about-us-section class="central-item large"></about-us-section>
        <image-divider :imageUrl="imageUrl"></image-divider>
        <certifications-section></certifications-section>
        <our-team-section></our-team-section>
        <timeline-section></timeline-section>
        <career-section></career-section>
        <footer-section></footer-section>
</template>

<script>
import AboutUsSection from '@/components/sections/company/AboutUsSection.vue';
import ImageDivider from '@/components/modules/ImageDivider.vue';
import CertificationsSection from '@/components/sections/company/CertificationsSection.vue';
import OurTeamSection from '@/components/sections/company/OurTeamSection.vue';
import CareerSection from '@/components/sections/company/CareerSection.vue';
import TimelineSection from '@/components/sections/company/TimelineSection.vue';

export default {
        components: { 
                AboutUsSection, 
                ImageDivider, 
                CertificationsSection,
                OurTeamSection,
                CareerSection,
                TimelineSection
         },
        data() {
                return { 
                        backgroundImageUrl: require('@/assets/images/common/header/hero.png'),
                        imageUrl: require("@/assets/images/company/image.png")
                };
        }
}
</script>