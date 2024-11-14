<template>
    <section class="central-item large">
        <base-section id="test" header="CERTIFICATIONS" 
                        secondHeader="Expertise you can trust">
        <image-carousel id="certifications-carousel" :images="certificationLogos"></image-carousel>
        </base-section>
    </section>
</template>


<script>
import BaseSection from '@/components/sections/common/BaseSection.vue';
import ImageCarousel from '@/components/modules/ImageCarousel.vue';

export default {
    components: { 
        BaseSection,
        ImageCarousel
     },
     data() {
        return {
            certificationLogos: [
                {
                    source: require("@/assets/images/company/certifications/aws-associate.png"),
                    alt: "AWS Associate"
                },
                {
                    source: require("@/assets/images/company/certifications/aws-solutions-architect.png"),
                    alt: "AWS"
                },
                {
                    source: require("@/assets/images/company/certifications/az-administrator.png"),
                    alt: "Azure"
                },
                {
                    source: require("@/assets/images/company/certifications/az-ai.png"),
                    alt: "Databricks"
                },
                {
                    source: require("@/assets/images/company/certifications/az-cosmos-db.png"),
                    alt: "Spark"
                },
                {
                    source: require("@/assets/images/company/certifications/az-data-associate.png"),
                    alt: "Terraform"
                },
                {
                    source: require("@/assets/images/company/certifications/az-data-engineer.png"),
                    alt: "Terraform"
                },
                {
                    source: require("@/assets/images/company/certifications/az-data-associate.png"),
                    alt: "Terraform"
                },
                {
                    source: require("@/assets/images/company/certifications/az-developer-associate.png"),
                    alt: "Terraform"
                },
                {
                    source: require("@/assets/images/company/certifications/az-devops.png"),
                    alt: "Terraform"
                },
                {
                    source: require("@/assets/images/company/certifications/az-solutions-architect.png"),
                    alt: "Terraform"
                },
                {
                    source: require("@/assets/images/company/certifications/ckad.png"),
                    alt: "Ckad"
                }
            ]
        };
     }
}
</script>

<style scoped>
section{
    text-align: center;
}
</style>

<style>
#certifications-carousel img {
    height: 120px;
    width: 120px;

    object-fit:contain;

    border: none;
    background: none;

    margin: 0 15px 0 0;
    padding: 0;
}
</style>