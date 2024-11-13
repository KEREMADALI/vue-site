<template>
    <div class="carousel-wrapper">
        <div v-for="c in 2" :key="c" class="carousel">
            <img v-for="image in images" :src="image.source" :key="image.alt" :alt="image.alt">
        </div>
    </div>
</template>

<script>
export default{
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
        mounted(){
            console.log("mounted!");
        }
    },
}
</script>∏

<style>
.carousel-wrapper {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  max-width: 1080px;
}

.carousel-wrapper:before,
.carousel-wrapper::after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;

  content: "";
  z-index: 2;
}

.carousel-wrapper:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.carousel-wrapper:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

@keyframes slide {
  from {
    transform: translate(0);
  }

  to {
    transform: translate(-100%);
  }
}

.carousel {
  display: inline-block;

  padding: 10px 0px;
  margin: 0;

  animation: 35s slide infinite linear;
}

.carousel img {
  margin: 0px 20px;
  padding: 20px;

  height: 80px;

  border: 1px solid lightgrey;
  border-radius: 25px;

  background: linear-gradient(180deg, rgba(153, 153, 153, 0.08), white);
}
</style>