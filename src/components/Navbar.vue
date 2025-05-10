<script setup lang="ts">

import Logo from '/logo.png'

</script>



<template>
  <nav>
    <div dir="rtl" lang="ar" class="navbar">
      <div class="content">
        <router-link to="/">
          <img :src="Logo" alt="CETSU LOGO">
        </router-link>

      </div>
      <div class="content">
        <router-link to="/">الرئيسية</router-link>
      </div>
      <div class="content">
        <router-link to="/majorPage">ارسم مسارك</router-link>
      </div>
      <div class="content">
        <router-link to="/Contact">حول البوت</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 5px;
}


.content img {
  max-width: 50px;
  height: auto;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content a {
  color: white;
  text-decoration: none;
}
</style>
