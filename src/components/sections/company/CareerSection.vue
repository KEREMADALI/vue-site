<template>
    <section>
        <base-section header="CAREER" secondHeader='Want to join our <span style="color:var(--dark-blue)">team</span>?'
            text="We’re constantly seeking skilled individuals to become part of our rapidly expanding team. <br />
                Check out the current job openings on our Careers page." class="central-item">
            <button class="classic-btn">Apply now</button>
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
    align-items: center;

    background-color: var(--light-blue);

    text-align: center;
}

button {
    align-self: center;

    margin-top: 48px;
}
</style>