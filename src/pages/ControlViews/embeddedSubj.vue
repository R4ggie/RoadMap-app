<script setup lang="ts">

import embedded from "/embeddedCont.png";

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
        <img :src=embedded alt="Embedded Systems" />
        <div class="text">
          <h4>الانظمة المدمجة Embedded Systems</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>مقدمة في الأنظمة المدمجة</p>
          </li>
          <li>
            <p>برمجة المتحكمات الدقيقة Microcontrollers</p>
          </li>
          <li>
            <p>C and embedded C languages</p>
          </li>
          <li>
            <p>أنظمة التشغيل في الوقت الحقيقي RTOS</p>
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
              <a href="https://www.youtube.com/watch?v=HMRAsJJ_fIA&list=PL6XhtJWb6Qa-inO_qYtlG2RkZV7itreUX"
                target="_blank">Embedded system course (Arabic)</a>
              <a href="https://www.youtube.com/playlist?list=PLoiqjtgvXf9cgQbnEyRpT8FmtAZHUHG2O" target="_blank">C
                Programming / Embedded C Course (Arabic)</a>
              <a href="https://www.youtube.com/watch?v=c6a1Q8flzWs" target="_blank">Embedded Systems Course with
                FreeRTOS (Arabic)</a>

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
