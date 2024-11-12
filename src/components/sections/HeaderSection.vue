<template>
    <section :style="cssProps">
        <navigation-bar></navigation-bar>
        <div class="content">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
            <button class="classic-btn" v-show="buttonText != ''">{{ buttonText }}</button>
        </div>
        <div></div>
    </section>

</template>

<script>
import NavigationBar from '@/components/modules/NavigationBar.vue'

export default {
    components: {
        NavigationBar
    },
    props: {
        header: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: false,
            default: ''
        },
        backgroundImageUrl: {
            type: String,
            required: true
        },
        isFull:{
            type: Boolean,
            required: false,
            default: true
        }
    },
    computed: {
        cssProps() {
            return {
                '--background-image-url': `url(${this.backgroundImageUrl})`,
                '--section-height': this.isFull ? "100vh" : "60vh"
            };
        }
    }
}

</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    background-size: cover;
    background-attachment: fixed; 
    background-position: center;
    background-image: linear-gradient(180deg,
            hsla(210, 100%, 14%, 1),
            hsla(210, 100%, 14%, 0.8)),
        var(--background-image-url);

    height: var(--section-height);
    width: 100%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;

    text-align: center;
}

h1 {
    font-weight: bold;
    font-size: 4rem;
    font-weight: 600;
}

p {
    padding: 2rem;

    font-size: 1.4rem;
    font-weight: 200;
}
</style>