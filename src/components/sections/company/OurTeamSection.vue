<template>
    <section>
        <base-section 
            header="OUR TEAM" 
            secondHeader="Meet our expert team" 
            text="Our team combines engineering excellence with international experience, delivering local <br />
                insights with a global impact."
            class="central-item">
            <div class="card-grid">
                <div class="photo-card">
                    <img src="" alt="profile-picture">
                    <h1>SAVAS <br />
                        GUVEN</h1>
                    <h2>Founder and CTO</h2>
                </div>
                <div class="photo-card">
                    <img src="" alt="profile-picture">
                    <h1>OLIVER <br />
                        RIEKENBRAUK</h1>
                    <h2>Director of Business Development</h2>
                </div>
            </div>
        </base-section>

    </section>
</template>


<script>
import BaseSection from '@/components/sections/common/BaseSection.vue';

export default {
    components: { BaseSection }


}
</script>

<style scoped>
section {
    background-color: var(--light-blue);
    
}

.custom-section {
    align-items: center;

    text-align: center;
}

.card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    column-gap: 120px;
    row-gap: 60px;
    margin-top: 40px;
}

.photo-card {
    display: grid;
    grid-template-rows: 7fr 1fr 1fr;

    text-align: left;
    color: var(--dark-blue);

    height: 403px;
    width: 420px;
    padding: 30px;

    border-radius: 25px;

    background-color: white;
    box-shadow: 15px 15px 15px var(--shadow-color);
}

.photo-card img{
    clip-path: circle(45%);
    width: 80%;

    background-color: var(--dark-blue);
}

.photo-card h1 {
    align-self: flex-end;

    margin: 10px 0;

    font-size: 22px;
    font-weight: bold;
}

.photo-card h2 {
    margin: 0;

    font-size: 22px;
    font-weight: 300;
}
</style>