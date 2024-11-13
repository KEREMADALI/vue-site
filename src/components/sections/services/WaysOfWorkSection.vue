<template>
    <section>
        <base-section header="WAYS OF WORK" secondHeader="How we corporate"
            text="Our adaptable business models enable us to quickly respond to your needs and seamlessly align with the way your company operates.">
            <div id="work-grid">
                <div class="work-card card">
                    <h1>Consulting</h1>
                    <p>Our consulting services are crafted to equip your business with the insights and strategies
                        necessary
                        to thrive in today’s competitive environment. With expertise across multiple industries, our
                        seasoned consultants deliver tailored solutions to meet your specific challenges.</p>
                </div>
                <div class="work-card card">
                    <h1>Project <br /> development</h1>
                    <p>Our consulting services are crafted to equip your business with the insights and strategies
                        necessary
                        to thrive in today’s competitive environment. With expertise across multiple industries, our
                        seasoned consultants deliver tailored solutions to meet your specific challenges.</p>
                </div>
                <div class="work-card card">
                    <h1>Outsourcing</h1>
                    <p>Outsourcing allows you to delegate non-core functions to our expert team, enabling you to focus
                        on
                        what you do best. Our services are designed to provide flexibility, cost efficiency, and
                        high-quality results without the overhead of managing additional in-house staff.</p>
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
section{
    align-items: center;

    text-align: center;

    background-color: var(--light-blue);
}

#work-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-self: center;

    gap: 26px;
}

.work-card {
    display: grid;
    grid-template-rows: 50px 1fr;
    gap: 24px;

    height: 395px;
    width: 382px;
}

.work-card h1 {
    display: flex;
    align-items: flex-start;

    margin: 0;
    padding: 0;

    font-size: 25px;
    color: var(--dark-blue);
}

.work-card p {
    margin: 0;
    padding: 0;

    font-size: 18px;
}
</style>