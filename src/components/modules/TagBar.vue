<template>
    <div id="tag-group">
        <tag-cell v-for="tag in tags" :key="tag" :id="tag" ></tag-cell>
    </div>

</template>

<script>
import TagCell from './TagCell.vue';

export default {
    components: {
        TagCell
    },
    inject: ['tags'],
    methods: {
        update() {
            console.log("emitted")
            this.$emit('tag-selected');
        }
    }
}
</script>

<style scoped>
#tag-group {
    display: flex;
    justify-content: center;
}

#tag-group div:not(:last-child) {
    margin-right: 10px;
}
</style>