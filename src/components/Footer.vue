<script setup lang="ts">

import Logo from '/logo.png'
import Logolibrary from '/logolibray.png'

</script>



<template>
  <footer>
    <div dir="rtl" lang="ar" class="footer-sec">
      <div class="content">
        <img :src="Logo" alt="CETSU LOGO">
        <div class="text">
          <div>
            <p>اتحاد كلية التقنية</p>
          </div>
          <div>
            <p>الالكترونية - طرابلس</p>
          </div>
        </div>
      </div>
      <div class="content">
        <a href="https://library.cetsu.ly/"><img :src="Logolibrary" alt="CETSU LOGO"></a>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-sec {
  padding: 20px 15px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.content img {
  max-width: 50px;
  height: auto;
  margin: 10px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 0px;
  font-size: 13px;
}

p {
  color: white;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
}
</style>
