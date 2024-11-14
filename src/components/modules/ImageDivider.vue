<template>
    <img :src="imageUrl" :alt="divider">
</template>


<script>
export default{
    data(){
        return {
            imageUrl: {
                type: String,
                required: true
            }
        };
    }
}
</script>