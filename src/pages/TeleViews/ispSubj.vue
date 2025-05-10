<script setup lang="ts">

import ISP from "/ispTele.png";

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
        <img :src=ISP alt="ISP" />
        <div class="text">
          <h4>الإنترنت وخدمات الـ ISPs </h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>إعداد PPPoE, NAT, DHCP</p>
          </li>
          <li>
            <p>Wi-Fi Networks</p>
          </li>
          <li>
            <p>إدارة MikroTik, Ubiquiti</p>
          </li>
          <li>
            <p>مبادئ إدارة السيرفرات (Linux basics, DNS)</p>
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
              <a href="https://mikrotik.com/training/https://mikrotik.com/training/" target="_blank">MikroTik official
                training </a>
              <a href="https://www.ui.com/training/" target="_blank">Ubiquiti Training Academy</a>
              <a href="https://www.youtube.com/watch?v=l9YxTXDiiFY&list=PLIhvC56v63IL2OjFvv_PI0B2yAXGfJLMI"
                target="_blank">NetworkChuck Linux</a>
              <a href="https://nsrc.org/workshops/2015/apricot2015/raw-attachment/wiki/Track4Agenda/2.4.2.dns-fundamentals.pdf"
                target="_blank">DNS fundamentals by NSRC</a>

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
