<template>
  <nav id="navigation">
    <router-link to="/" class="navigation-logo">
      <img src="@/assets/images/common/header/logo.svg" alt="Deep Network">
    </router-link>
    <div class="navigation-links">
      <router-link to="/services">Services</router-link>
      <router-link to="/company">Company</router-link>
      <router-link to="/case-studies">Case Studies</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/career">Career</router-link>
    </div>
    <div id="language-selector">
      <img src="@/assets/images/common/header/flag-en.svg">
      <select>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  </nav>
</template>


<script>
export default {}
</script>

<style scoped>
#navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 3rem;

  text-decoration: none;
}

#navigation a {
  text-decoration: none;
  font-size: 1rem;
  margin: 1rem;
  color: white;
}

#navigation a:hover {
  text-decoration: underline;
}

#language-selector {
  display: flex;
}

#language-selector select {
  background: none;
  border: none;
  color: white;
  font-size: 0;
}
</style>
