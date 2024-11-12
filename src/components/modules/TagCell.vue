<template>
     <div class="tag-wrapper">
            <input :id="id" type="checkbox" @click="update"/>
            <label :for="id" class="tag">{{ id }}</label>
        </div>
</template>

<script>
export default{
    props:['id'],
    emits: ['tag-selected'],
    methods: {
        update(){
            this.$emit('tag-selected', this.id);
        }
    }
}
</script>

<style>
.tag {
    padding: 8px 20px;

    border-radius: 10px;
    border: 1px solid var(--dark-blue);

    color: var(--dark-blue);
    font-size: 18px;
    font-weight: 300;
}

input {
    appearance: none;
}

input[type="checkbox"]:checked+label {
    color: white;
    background-color: var(--dark-blue);
}
</style>