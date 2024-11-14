<template>
    <img :src="imageUrl" alt="divider">
</template>


<script>
export default {
    props: {
        imageUrl: {
                type: String,
                required: true
            }
    }
}
</script>

<style scoped>
img {
    width: 100%;
    height: 439px;

    object-fit: cover;
}
</style>