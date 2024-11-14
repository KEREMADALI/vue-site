<template>
    <section>
        <base-section header="TIMELINE" secondHeader='Our growth' class="central-item">
            <div class="timeline">
                <div class="line"></div>
                <div id="pin1" class="pin" :class="{ selected: pin1Selected }" @click="selectPin">
                    <div>2020</div>
                    <img src="@/assets/images/company/icons/unselected.svg" alt="">
                </div>
                <div id="pin2" class="pin" :class="{ selected: pin2Selected }" @click="selectPin">
                    <div>2021</div>
                    <img src="@/assets/images/company/icons/unselected.svg" alt="">
                </div>
                <div id="pin3" class="pin" :class="{ selected: pin3Selected }" @click="selectPin">
                    <div>2022</div>
                    <img src="@/assets/images/company/icons/unselected.svg" alt="">
                </div>
                <div id="pin4" class="pin" :class="{ selected: pin4Selected }" @click="selectPin">
                    <div>2023</div>
                    <img src="@/assets/images/company/icons/unselected.svg" alt="">
                </div>
                <div id="pin5" class="pin" :class="{ selected: pin5Selected }" @click="selectPin">
                    <div>2024</div>
                    <img src="@/assets/images/company/icons/unselected.svg" alt="">
                </div>
            </div>
            <h2>Achivements</h2>
            <p v-show="pin1Selected">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci iusto minus
                aperiam
                at. Tempora eaque ducimus, dolores ex neque quaerat molestias ipsum perferendis ut harum dolor aliquid?
                Aut,
                voluptatibus tempore.</p>
            <p v-show="pin2Selected">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat ab
                nostrum
                adipisci eius debitis excepturi cupiditate aliquam ullam similique maxime tempora harum mollitia
                accusantium, molestiae quasi quam eveniet cumque?</p>
            <p v-show="pin3Selected">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem ad,
                commodi
                temporibus quibusdam consequuntur inventore numquam accusamus molestias nesciunt! Necessitatibus qui
                laboriosam facilis consectetur a deleniti, sequi alias sint.</p>
            <p v-show="pin4Selected">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae
                minus
                quod excepturi dicta iure earum, harum numquam doloribus exercitationem eligendi amet ipsa enim
                accusantium
                dignissimos adipisci aspernatur saepe nihil!</p>
            <p v-show="pin5Selected">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos repellat
                suscipit
                dicta odio, amet nisi eaque, corrupti officia impedit provident ab similique totam? Et ea quam quibusdam
                atque omnis?</p>
        </base-section>
    </section>
</template>


<script>
import BaseSection from '@/components/sections/common/BaseSection.vue';

export default {
    components: { BaseSection },
    data() {
        return {
            pin1Selected: false,
            pin2Selected: false,
            pin3Selected: true,
            pin4Selected: false,
            pin5Selected: false
        };
    },
    methods: {
        selectPin(event) {

            // TODO use radio buttons instead

            this.pin1Selected = false;
            this.pin2Selected = false;
            this.pin3Selected = false;
            this.pin4Selected = false;
            this.pin5Selected = false;

            switch(event.target.id){
                case 'pin1':
                    this.pin1Selected = true;
                    break;
                case 'pin2':
                    this.pin2Selected = true;
                    break;
                case 'pin3':
                    this.pin3Selected = true;
                    break;
                case 'pin4':
                    this.pin4Selected = true;
                    break;
                case 'pin5':
                    this.pin5Selected = true;
                    break;
            }
        }
    }
}
</script>

<style scoped>
section .custom-section {
    align-items: center;

    text-align: center;
}

section h2 {
    font-size: 22px;
    font-weight: 200;
}

.timeline {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 50vw;

    margin: 30px;
}

.line {
    position: absolute;

    top: 70%;
    right: 43px;
    left: 43px;

    height: 2px;

    background-color: black;
}

.pin {
    position: relative;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;
}

.pin div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 51px;
    width: 100px;

    font-size: 18px;
    font-weight: 200;
    color: black;
}

.pin img {
    object-fit: none;
    pointer-events: none;
}

.selected div {
    font-size: 42px;
    font-weight: 500;
    color: var(--dark-blue);
}

.selected img {
    content: url("@/assets/images/company/icons/selected.svg");
}
</style>