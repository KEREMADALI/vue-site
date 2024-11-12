<template>
  <footer id="footer-section">
    <router-link to="/" class="navigation-logo">
      <img src="@/assets/images/common/header/logo.svg" alt="Deep Network">
    </router-link>
    <div id="footer-texts">
      <p id="footer-description">Empowering businesses with cutting-edge <br />
        Cloud, AI, and Data solutions. Trusted <br />
        expertise, global reach.</p>
      <p id="footer-legal-description">Managing Director: Savas Guven <br />
        Domicile and court of registry: München <br />
        Commercial register No.: 229 039 <br />
        V.A.T. Identification No.: DE309314229</p>
    </div>
    <nav id="footer-site-map">
      <h1>SITEMAP</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/company">Company</router-link>
      <router-link to="/case-studies">Case Studies</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/career">Career</router-link>
    </nav>
    <div id="address-wrapper">
      <address id="footer-address-germany" class="footer-address">
        <h1>GERMANY</h1>
        <p>
          Deep Network GmbH <br />
          Zeppelinstr. 73 <br />
          DE-81669 München <br />
        </p>
        <div class="footer-address-contact">
          <div class="contact-info">
            <img src="@/assets/images/common/footer/phone.svg" alt="phone-icon">
            <span>+49 (0) 89 2316 6638</span>
          </div>
          <div class="contact-info">
            <img src="@/assets/images/common/footer/email.svg" alt="email-icon">
            <span>info@deepnetwork.com</span>
          </div>
        </div>
      </address>
      <address id="footer-address-usa" class="footer-address">
        <h1>USA</h1>
        <p>
          Deep Network Corp. <br />
          1321 Upland Dr. Apt #2133 <br />
          Houston, TX 77043 <br />
        </p>
        <div class="footer-address-contact">
          <div class="contact-info">
            <img src="@/assets/images/common/footer/phone.svg" alt="phone-icon">
            <span>+1 425 247 0842</span>
          </div>
          <div class="contact-info">
            <img src="@/assets/images/common/footer/email.svg" alt="email-icon">
            <span>info@deepnetwork.com</span>
          </div>
        </div>
      </address>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
#footer-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 100px 120px;

  background-color: var(--darker-blue);

  color: white;
  font-weight: 200;
  font-size: 16px;
}

#footer-section * {
  font-size: 16px;
  line-height: 1.5;
}

#footer-section>*:not(:first-child) {
  flex-grow: 1;

  margin-right: 20px;
}

#footer-section>* {
  margin-bottom: 30px;
}

#footer-logo {
  width: 100%;
}

#footer-texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#footer-site-map {
  display: flex;
  flex-direction: column;
}

#footer-site-map a {
  margin-top: 1rem;

  color: white;
  text-decoration: none;
  font-size: 14px;
}

#address-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-address {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 246px;
  margin-bottom: 30px;
}

.footer-address p {
  margin-top: 10px;
}

.footer-address-contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  justify-self: flex-end;
  margin-top: 30px;
}

.footer-address-contact img {
  filter: invert(100%);
}

.contact-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 10px;
}

.contact-info img {
  margin-right: 10px;
}
</style>