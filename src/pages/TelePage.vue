<script setup lang="ts">

import Networking from '/networkingTele.png';
import Mobile from "/mobileTele.png";
import ISP from "/ispTele.png";
import Oil from "/oilTele.png";
import TeleIcon from "/TeleIcon.png";

</script>


<template>
  <div dir="rtl" lang="ar" class="body">

    <div class="content">
      <img :src=TeleIcon alt="TeleIcon" />
      <div class="text">
        <p>هندسة الاتصلات</p>
      </div>
    </div>

    <div class="heading">
      <h1>اختر مسارك</h1>
    </div>


    <!-- Networking -->
    <div class="sub-body">
      <div class="subjects">
        <img :src=Networking alt="Networking" />
        <div class="text">
          <router-link to="/networkingSubj"> الشبكات Networking</router-link>
        </div>
      </div>

      <!-- Mobile -->
      <div class="subjects">
        <img :src=Mobile alt="Mobile" />
        <div class="text">
          <router-link to="/mobileSubj"> شبكات الموبايل Mobile Networks</router-link>
        </div>
      </div>

      <!-- ISP -->
      <div class="subjects">
        <img :src=ISP alt="ISP" />
        <div class="text">
          <router-link to="/ispSubj">الإنترنت وخدمات الـ ISPs </router-link>
        </div>
      </div>

      <!-- Oil -->
      <div class="subjects">
        <img :src=Oil alt="oil" />
        <div class="text">
          <router-link to="/oilSubj">مجال النفط والغاز </router-link>
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
