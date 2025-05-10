<script setup lang="ts">

import CsIcon from '/CsIcon.png'
import mobapp from "/mobapp.png";
import deskapp from "/deskapp.png";
import frontapp from "/frontapp.png";
import backapp from "/backapp.png";
import cyber from "/cyberapp.png";

</script>


<template>
  <div dir="rtl" lang="ar" class="body">

    <div class="content">
      <img :src=CsIcon alt="CETSU" />
      <div class="text">
        <p>الحاسب الالي</p>
      </div>
    </div>

    <div class="heading">
      <h1>اختر مسارك</h1>
    </div>


    <!-- frontend -->
    <div class="sub-body">
      <div class="subjects">
        <img :src=frontapp alt="frontend" />
        <div class="text">
          <router-link to="/frontendSubj">تطبيقات الويب Front-end</router-link>
        </div>
      </div>

      <!-- backend -->
      <div class="subjects">
        <img :src=backapp alt="backend" />
        <div class="text">
          <router-link to="/backendSubj">تطبيقات الويب Back-end</router-link>
        </div>
      </div>

      <!-- mobile app -->
      <div class="subjects">
        <img :src=mobapp alt="mobile app" />
        <div class="text">
          <router-link to="/mobileappSubj">تطبيقات الهاتف Mobile Application</router-link>
        </div>
      </div>

      <!-- desktop app -->
      <div class="subjects">
        <img :src=deskapp alt="deesktop app" />
        <div class="text">
          <router-link to="/deskappSubj">تطبيقات سطح المكتب Desktop Application</router-link>
        </div>
      </div>

      <!-- Cybersecurity  -->
      <div class="subjects">
        <img :src=cyber alt="Cybersecurity " />
        <div class="text">
          <router-link to="/cyberSubj">الأمن السيبراني Cybersecurity</router-link>
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
