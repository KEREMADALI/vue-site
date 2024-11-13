<template>
  <div class="custom-section">
    <header v-if="header != ''" v-html="header"></header>
    <h1 v-html="secondHeader"></h1>
    <p v-if="text != ''" v-html="text"></p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: false,
      default: ""
    },
    secondHeader: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
  }
}
</script>

<style scoped>
.custom-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
}

header,
:slotted(header) {
  color: var(--dark-blue);

  font-weight: bold;
  font-size: 22px;
}

h1,
:slotted(h1) {
  font-size: 42px;

  margin: 1rem 0;
}

p,
:slotted(p) {
  padding: 1rem 0;

  color: var(--text-grey);
  font-weight: 200;
  font-size: 22px;
  line-height: 1.5;
}
</style>