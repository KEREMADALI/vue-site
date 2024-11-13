<template>
    <section>
        <base-section header="SERVICES" secondHeader="Our areas of expertise" text="From cloud infrastructure and big data, we deliver cutting edge solutions and expert <br/> 
        training tailored to your needs." class="central-item">
            <div id="service-grid">
                <div class="services-box card">
                    <h1>Cloud <br />Services</h1>
                    <p>Expert cloud solutions tailored to your needs, backend by certified professionals and proven
                        project success.</p>
                    <a href="">Learn more</a>
                </div>
                <div class="services-box card">
                    <h1>LLM/AI Solutions <br />and LLMOps</h1>
                    <p>Advanced AI solutions for smarter decisions, automated knowledge management, and a competitive
                        edge with cutting-edge LLM technology.</p>
                    <a href="">Learn more</a>
                </div>
                <div class="services-box card">
                    <h1>Big Data <br />Analytics Platform</h1>
                    <p>Transform your data into insights with scalable analytics, enabling smarter decisions and
                        real-time analysis.</p>
                    <a href="">Learn more</a>
                </div>
                <div class="services-box card">
                    <h1>Trainings &<br />Workshops</h1>
                    <p>Expert training designed to enhance your skills and knowledge, led by industry professionals with
                        proven experience.</p>
                    <a href="">Learn more</a>
                </div>
            </div>
            <button class="classic-btn">All services</button>
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
    align-items: center;
    background-color: var(--light-blue);

    text-align: center;
}

button {
    width: 161px;
    align-self: center;

    margin-top: 1.5rem;
}

#service-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    padding: 1.5rem 0;
    margin: 0;
}

.services-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    margin: 0;
    padding: 0 3rem;
    height: 304px;
    width: 454px;

    border: 1px solid transparent;
}

.services-box:hover {
    border: 1px solid var(--dark-blue);
}

.services-box h1 {
    color: var(--dark-blue);
    font-size: 25px;
}

.services-box p {
    margin: 0;
    padding: 0;

    font-size: 18px;
    font-weight: 300;

    color: #595959;
}

.services-box a {
    font-size: 16px;
    color: var(--dark-blue);
    text-decoration: none;
}
</style>
