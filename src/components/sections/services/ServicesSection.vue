<template>
    <section class="central-item large">
        <img id="main-image" src="@/assets/images/services/hero.png">

        <div id="service-section-content">
            <base-section header="SERVICES" secondHeader="Tailered solutions for <br />
                    <span style='color: var(--dark-blue);'>your success</span>" text="At Deep Network, we are dedicated to driving <br />
                    innovation and transformation through our cutting- <br />
                    edge product suite. Our solutions are meticulously <br />
                    designed to address the diverse needs <br />
                    of businesses in today’s rapidly evolving digital <br />
                    landscape. By combining advanced technology <br />
                    with expert insights, we empower organizations to <br />
                    unlock their full potential. Explore our key product <br />
                    categories below:">
                <button class="classic-btn">Contact us</button>
            </base-section>
            <div id="dropdown-column">
                <div class="dropdown">
                    <div class="card">
                        <header>Cloud Services</header>
                        <input type="checkbox" class="dropdown-toggle" @click="update('dropdown1')">
                    </div>
                    <ul v-show="dropdown1State" class="dropdown-content">
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Scalability</h1>
                            <p>Easily scale your resources to match your business needs, ensuring optimal performance
                                during peak times without overspending during quieter periods.</p>
                        </li>
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Security</h1>
                            <p>Our solutions prioritize robust security measures, protecting your data and applications
                                with advanced encryption, compliance standards, and regular audits.</p>
                        </li>
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Security</h1>
                            <p>Tailor our products to fit your unique business requirements, enabling a seamless
                                integration with your existing systems and workflows.</p>
                        </li>
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Expert Support</h1>
                            <p>Benefit from our dedicated support team, offering ongoing assistance, training, and
                                resources to help you maximize the potential of our solutions.</p>
                        </li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div class="card">
                        <header>LLM/AI Solutions</header>
                        <input type="checkbox" class="dropdown-toggle" @click="update('dropdown2')">
                    </div>
                    <ul v-show="dropdown2State" class="dropdown-content">
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Scalability</h1>
                            <p>Easily scale your resources to match your business needs, ensuring optimal performance
                                during peak times without overspending during quieter periods.</p>
                        </li>
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Security</h1>
                            <p>Our solutions prioritize robust security measures, protecting your data and applications
                                with advanced encryption, compliance standards, and regular audits.</p>
                        </li>
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Security</h1>
                            <p>Tailor our products to fit your unique business requirements, enabling a seamless
                                integration with your existing systems and workflows.</p>
                        </li>
                        <li>
                            <img src="@/assets/images/services/icons/check.svg" alt="">
                            <h1>Expert Support</h1>
                            <p>Benefit from our dedicated support team, offering ongoing assistance, training, and
                                resources to help you maximize the potential of our solutions.</p>
                        </li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div class="card">
                        <header>Big data analytics platform</header>
                        <input type="checkbox" class="dropdown-toggle" @click="update('dropdown3')">
                    </div>
                </div>
                <div class="dropdown">
                    <div class="card">
                        <header>Trainings & Workshops</header>
                        <input type="checkbox" class="dropdown-toggle" @click="update('dropdown4')">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BaseSection from '@/components/sections/common/BaseSection.vue';

export default {
    components: {
        BaseSection
    },
    data(){
        return{
            dropdown1State: false,
            dropdown2State: false,
            dropdown3State: false,
            dropdown4State: false,
        };
    },
    methods: {
        update(dropdownId){
            switch(dropdownId){
                case 'dropdown1':
                    this.dropdown1State = !this.dropdown1State;
                    this.dropdown2State = false;
                    this.dropdown3State = false;
                    this.dropdown4State = false;
                    break;
                case 'dropdown2':
                    this.dropdown2State = !this.dropdown2State;
                    this.dropdown1State = false;
                    this.dropdown3State = false;
                    this.dropdown4State = false;
                    break;  
                case  'dropdown3':
                    this.dropdown3State = !this.dropdown3State;
                    this.dropdown1State = false;
                    this.dropdown2State = false;
                    this.dropdown4State = false;
                    break;
                case 'dropdown4':
                    this.dropdown4State = !this.dropdown4State;
                    this.dropdown1State = false;
                    this.dropdown2State = false;
                    this.dropdown3State = false;
                    break;
                default:
                    console.log("Missing dropdown id: " + dropdownId);
            }
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;

    position:relative;
    top: -150px;
}

#main-image {
    height: 494px;

    object-fit: cover;
}

#service-section-content {
    display: flex;
    grid-template-columns: auto auto;

    gap: 5%;

    padding-top: 5.5rem;
}

#service-section-content .custom-section{
    justify-content: flex-start;
}

#service-section-content > *{
    padding-top: 0;

    width: 50%;
}

.dropdown {
    margin-bottom: 15px;
}

.dropdown .card {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
}

.dropdown .card header {
    color: var(--dark-blue);
    font-size: 25px;
    font-weight: 500;
}

.dropdown-toggle{
    appearance: none;
    background-image: url("@/assets/images/services/icons/maximize.svg");
    object-fit: contain;

    min-height: 35px;
    min-width: 35px;
    height: 35px;
    width: 35px;

    cursor: pointer;
}

.dropdown-toggle:checked{
    background-image: url("@/assets/images/services/icons/minimize.svg");
}

.dropdown-content{
    margin: 2rem 0 0 3rem;

    list-style: none;
}

.dropdown-content li{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

.dropdown-content li:not(:last-child){
    margin-bottom: 6%;
}

.dropdown-content li h1{
    margin-left: 2%;
    
    font-size: 22px;
    font-weight: bold;
}

.dropdown-content li p{
    margin-top: 3%;
    
    width: 100%;

    font-size: 22px;
    font-weight: 200;
    line-height: 1.5;
}
</style>