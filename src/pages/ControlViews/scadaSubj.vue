<script setup lang="ts">

import scada from '/scadaCont.png';

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
        <img :src=scada alt="Logic" />
        <div class="text">
          <h4>التحكم المنطقي المبرمج SCADA (PLC)</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>مقدمة في التحكم المنطقي المبرمج </p>
          </li>
          <li>
            <p>Ladder Logic</p>
          </li>
          <li>
            <p>مراقبة العمليات PLC & SCADA</p>
          </li>
          <li>
            <p>التعامل مع الحساسات والمشغلات</p>
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
              <h4>كورسات في اليوتيوب</h4>
              <a href="https://www.youtube.com/watch?v=3c8VevhxfH4" target="_blank">دورة شامله عن
                PLC & SCADA</a>
              <a href="https://www.youtube.com/@arabautomation7647" target="_blank">Arab Automation (Arabic)</a>
              <a href="https://dev.to/ericchapman/vue-js-101-part-1-first-baby-step-4f40">SIEMENS SIMATICS S7-300 PLC
                (Arabic)</a>

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
  gap: 10px;
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
