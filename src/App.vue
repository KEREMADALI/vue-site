<template>
   <main>
    <router-view></router-view>
   </main>
</template>

<script>
export default {}
</script>

<style>
/* Inter Font */
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

:root {
    --darker-blue: #072249;
    --dark-blue: #0062AF;
    --light-blue: #F7FBFF;
    --text-grey: #595959;
    --light-grey: #999999;
    --shadow-color: #DEEBF7;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: "Inter", "Times New Roman", sans-serif;
}

body {
    overflow-x: hidden;
}

.central-item {
    max-width: 960px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.central-item.large {
    max-width: 1200px;
}

.classic-btn {
    background-color: var(--dark-blue);
    color: white;

    width: 192px;
    height: 45px;
    border-radius: 25px;
    border: none;

    font-size: 1.1rem;
    font-weight: 200;
}

/* Card */
.card {
  padding: 40px;

  border-radius: 5%;

  background-color: white;
  box-shadow: 15px 15px 15px var(--shadow-color);

  text-align: left;
}
</style>