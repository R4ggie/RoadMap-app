<script setup lang="ts">

import industry from "/industryCont.png";

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
        <img :src=industry alt="Industrial Automation" />
        <div class="text">
          <h4> الأتمة الصناعية Industrial Automation</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>مقدمة في انظمة الأتمه الصناعية</p>
          </li>
          <li>
            <p>تصميم واجهات HMI</p>
          </li>
          <li>
            <p>تكامل الأنظمة الصناعية</p>
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
              <a href="hhttps://www.youtube.com/watch?v=S8mS-IOVeTM" target="_blank">introduction to industrial
                automation systems (Arabic)</a>
              <a href="https://www.youtube.com/@Automation-World-AR" target="_blank">Abanoub Emil - أبانوب إميل
                (Arabic)</a>
              <a href="https://thedigitaladda.com/industrial-automation-with-plc-scada-professional-certification/"
                target="_blank">PLC & SCADA Certification</a>


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
