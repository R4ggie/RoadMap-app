<script setup lang="ts">

import Logo from '/logoRoad.png'


</script>


<template>
  <div dir="rtl" lang="ar" class="body">
    <div class="icon">
      <img :src=Logo alt="Icon" />
    </div>
    <div class="text">
      <h2>ارسم مسارك</h2>
      <p>رحلتك تبدأ بخطوة، ارسم مسارك اليوم</p>
    </div>

    <button>
      <router-link to="/majorPage">ابدأ </router-link>
    </button>

  </div>

</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 30px;
  padding-top: 90px;
}


.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 40%;
  height: auto;
}

.text {
  margin: 0px;
  padding: 0px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 20px;
}

button {
  background-color: white;
  border: none;
  font-size: 16px;
  padding: 5px 22px;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
}

a {
  color: rgb(46, 77, 103);
}

h2 {
  margin: 0px;
  padding: 0px;
  margin-bottom: 5px;
}

p {
  margin: 0px;
  padding: 0px;
}
</style>
