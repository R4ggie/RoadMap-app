<script setup lang="ts">

import iot from '/iotCont.png';

function Toggle() {
  const List = document.getElementById("list");
  if (List) {
    List.style.display = List.style.display === "none" ? "block" : "none";
  }
}


</script>


<template>
  <div dir="rtl" lang="ar" class="body">

    <div class="body">

      <!-- title -->
      <div class="title">
        <img :src=iot alt="IoT" />
        <div class="text">
          <h4>انترنت الأشياء IoT</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>مكوناته الأساسية IoT</p>
          </li>
          <li>
            <p>Arduino/ eSP32/ NodeMCU</p>
          </li>
          <li>
            <p>قراءة إشارات الحساسات والتحكم في المشغلات</p>
          </li>
          <li>
            <p>اتصال بالشبكة WiFi, MQTT, HTTP</p>
          </li>
          <li>
            <p>ارسال وعرض البيانات ThingSpeak, Blynk</p>
          </li>
          <li>
            <p> تخزين البيانات FireBase, DataBase</p>
          </li>
          <li>
            <p> تكامل انترنت الأشياء مع انظمة التحكم الآلي PLC, SCADA</p>
          </li>
        </ul>
      </div>

      <!-- resources -->
      <div class="resources">
        <div class="btn">
          <button @click="Toggle">عرض المصادر</button>
        </div>

        <div id="list" class="list" style="display: none;">
          <ul class="item-all">


            <li class="item">
              <h4>قنوات يوتيوب ودورات</h4>
              <a href="https://www.freecodecamp.org/news/introduction-to-iot-internet-of-things/"
                target="_blank">Introduction to the Internet of Things</a>
              <a href="https://www.iotforall.com/" target="_blank">IoT-for-all Website</a>
              <a href="https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP" target="_blank">Arduino
                Tutorials By Paul McWhorter</a>
              <a href="https://www.arduino.cc/" target="_blank">Official Arduino Website</a>
              <a href="https://randomnerdtutorials.com/getting-started-with-esp32/" target="_blank">
                Getting Started with the ESP32 Development Board
              </a>
              <a href="https://thingspeak.mathworks.com/" target="_blank">ThingSpeak</a>
              <a href="https://www.youtube.com/@NetworkChuck" target="_blank">NetworkChuck Channel</a>
              <a href="https://www.realpars.com/courses/iot-basics" target="_blank">IoT Basics: Introduction to
                Industrial Applications</a>

            </li>


          </ul>
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

.title {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  background-color: rgba(255, 0, 0, 0);
  gap: 15px;
}



.subjcts {
  margin-top: 30px;
  margin-right: 30px;
  font-size: 17px;
}

.resources {
  padding: 30px 0px;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item {
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item-all {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

img {
  width: 50px;
  height: auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-top: 30px;
}

a {
  color: white;
  text-decoration: underline;
  text-decoration-color: rgba(143, 130, 202, 0.617);
}

button {
  color: white;
  background-color: #225D84;
  border: none;
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;

}

h4 {
  margin: 0px;
  margin-bottom: 7px;
}
</style>
