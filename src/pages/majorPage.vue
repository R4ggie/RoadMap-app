<script setup lang="ts">

import CsIcon from '/CsIcon.png'
import TeleIcon from '/TeleIcon.png'
import ConIcon from '/ConIcon.png'


</script>


<template>
  <div dir="rtl" lang="ar" class="body">
    <div class="heading">
      <h1>اختر تخصصك</h1>
    </div>

    <div class="content">


      <div class="box">
        <div class="cs">
          <img :src=CsIcon alt="CETSU" />
        </div>
        <div class="text">
          <router-link to="/Computerpage">الحاسب الالي</router-link>
        </div>

      </div>
      <div class="box">
        <img :src=TeleIcon alt="CETSU" />
        <div class="text">
          <router-link to="/Telepage">التصالات</router-link>
        </div>
      </div>

      <div class="box">
        <img :src=ConIcon alt="CETSU" />
        <div class="text">
          <router-link to="/Controlpage">التحكم الالي</router-link>
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

.heading {
  padding-top: 5px;
  font-size: 17px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 0, 0, 0);
  gap: 40px;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text {
  font-size: 20px;
}

a {
  text-decoration: none;
  color: white;
}

img {
  max-width: 30%;
}

.cs img {
  max-width: 100%;
}
</style>
