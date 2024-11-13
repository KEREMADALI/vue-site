<template>
    <section>
        <base-section header="TECHNOLOGY" secondHeader="Software solutions we are <br />experts in"
            text="We specialize in delivering robust, high-performance cloud, data, and analytics solutions that drive operational efficiency and strategic growth, leveraging advanced technologies, such as: "
            class="central-item">
            <image-carousel :images="this.technologyLogos">
            </image-carousel>
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
            technologyLogos: [
                {
                    source: require("@/assets/images/homepage/technology/amazon-kinesis.svg"),
                    alt: "Amazon Kinesis"
                },
                {
                    source: require("@/assets/images/homepage/technology/aws.svg"),
                    alt: "AWS"
                },
                {
                    source: require("@/assets/images/homepage/technology/azure.svg"),
                    alt: "Azure"
                },
                {
                    source: require("@/assets/images/homepage/technology/databricks.svg"),
                    alt: "Databricks"
                },
                {
                    source: require("@/assets/images/homepage/technology/spark.svg"),
                    alt: "Spark"
                },
                {
                    source: require("@/assets/images/homepage/technology/terraform.svg"),
                    alt: "Terraform"
                }
            ]
        }
    }
}
</script>

<style scoped>
section {
    align-items: center;

    text-align: center;
}
</style>
