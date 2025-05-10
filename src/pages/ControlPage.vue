<script setup lang="ts">

import ConIcon from '/ConIcon.png'
import embedded from "/embeddedCont.png";
import industry from "/industryCont.png";
import power from "/powerCont.png";
import robot from "/robotCont.png";
import scada from '/scadaCont.png';
import ai from '/aiCont.png';
import iot from '/iotCont.png';

</script>


<template>
  <div dir="rtl" lang="ar" class="body">

    <div class="content">
      <img :src=ConIcon alt="CETSU" />
      <div class="text">
        <p>التحكم الالي</p>
      </div>
    </div>

    <div class="heading">
      <h1>اختر مسارك</h1>
    </div>


    <!-- SCADA -->
    <div class="sub-body">
      <div class="subjects">
        <img :src=scada alt="Logic" />
        <div class="text">
          <router-link to="/scadaSubj">التحكم المنطقي المبرمج SCADA (PLC)</router-link>
        </div>
      </div>

      <!-- Industrial -->
      <div class="subjects">
        <img :src=industry alt="Automation" />
        <div class="text">
          <router-link to="/industrialSubj"> الأتمة الصناعية Industrial Automation</router-link>
        </div>
      </div>

      <!-- Robotics -->
      <div class="subjects">
        <img :src=robot alt="Robotics" />
        <div class="text">
          <router-link to="/roboticsSubj">الروبوتات والتحكم بالحركة Robotics & Motion Control</router-link>
        </div>
      </div>

      <!-- Power -->
      <div class="subjects">
        <img :src=power alt="Power" />
        <div class="text">
          <router-link to="/powerSubj">الطاقة والتحكم Power & Control</router-link>
        </div>
      </div>

      <!-- IoT -->
      <div class="subjects">
        <img :src=iot alt="IoT" />
        <div class="text">
          <router-link to="/iotSubj">انترنت الأشياء IoT</router-link>
        </div>
      </div>

      <!-- Embedded -->
      <div class="subjects">
        <img :src=embedded alt="Embedded Systems" />
        <div class="text">
          <router-link to="/embeddedSubj">الانظمة المدمجة Embedded Systems</router-link>
        </div>
      </div>

      <!-- AI -->
      <div class="subjects">
        <img :src=ai alt="AI" />
        <div class="text">
          <router-link to="/aiSubj">الذكاء الأصطناعي AI</router-link>
        </div>
      </div>


    </div>

  </div>
</template>

<style scoped>
.body {
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 0px;
  margin-bottom: 5px;
}

.heading {
  padding-top: 5px;
  font-size: 18px;
  margin-right: 10px;
}

.sub-body {
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.subjects {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  background-color: rgba(255, 0, 0, 0);
  gap: 10px;
}

.subjects img {
  max-width: 15%;
}

a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

img {
  max-width: 20%;
}
</style>
