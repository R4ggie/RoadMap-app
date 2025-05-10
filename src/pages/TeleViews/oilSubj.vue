<script setup lang="ts">

import Oil from "/oilTele.png";

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
        <img :src=Oil alt="Oil" />
        <div class="text">
          <h4>مجال النفط والغاز </h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <h4>شبكات التحكم SCADA</h4>
            <p>SCADA basics </p>
            <p>حماية SCADA (cybersecurity) </p>
          </li>
          <li>
            <h4>الشبكات السلكية والصناعية</h4>
            <p>LAN, WAN, VPN, Industrial Ethernet</p>
            <p>Cisco, MikroTik basics</p>
          </li>
          <li>
            <h4>أنظمة الأمن والمراقبة</h4>
            <p>تركيب وصيانة CCTV, NVR/DVR </p>
            <p>إعداد أنظمة إنذار </p>
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
              <a href="https://www.youtube.com/@JeremysITLab" target="_blank">Jeremy's IT Lab</a>
              <a href="https://www.rohde-schwarz.com/mea/home_48230.html" target="_blank">Rohde & Schwarz</a>
              <a href="https://www.youtube.com/watch?v=9ZCIG7bDY0w" target="_blank">Networking Basics for CCTV </a>
              <a href="https://www.udemy.com/course/640-692-implementing-cisco-industrial-networking/?couponCode=LETSLEARNNOWb"
                target="_blank">Implementing Cisco Industrial Networking</a>
              <a href="https://www.udemy.com/course/introduction-to-satellite-terminals/" target="_blank">Introduction
                to Satellite Terminals</a>
              <a href="https://www.youtube.com/watch?v=83kLgyRpNZs" target="_blank">SCADA Introduction </a>
              <a href="https://www.coursera.org/professional-certificates/google-it-support" target="_blank">Google IT
                Support</a>
              <a href="https://www.netacad.com/" target="_blank">Cisco Networking Academy</a>
              <a href="https://alison.com/course/health-and-safety-for-social-and-health-workers" target="_blank">Alison
                HSE Awareness</a>
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

.subjcts li {
  margin-bottom: 35px;
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
  gap: 15px;
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
