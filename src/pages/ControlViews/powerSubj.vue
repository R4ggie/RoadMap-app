<script setup lang="ts">

import power from "/powerCont.png";

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
        <img :src=power alt="Power & Control" />
        <div class="text">
          <h4>الطاقة والتحكم Power & Control</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>أنظمة الطاقة الكهربائية</p>
          </li>
          <li>
            <p>التحكم في أنظمة الطاقة</p>
          </li>
          <li>
            <p>التحكم في المحركات الكهربائية</p>
          </li>
          <li>
            <p>تحليل نظم التحكم الكلاسيكية والحديثة</p>
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
              <a href="https://www.youtube.com/watch?v=lc03pGwPYDc" target="_blank">Introduction to Control Systems
                (Arabic)</a>
              <a href="https://youtu.be/bjZEEJso0Fg?si=UIPVt82i3p0f-x-q" target="_blank">Electrical Controls & Power
                Systems Course (Arabic)</a>
              <a href="https://www.youtube.com/playlist?list=PLcQx_H8vz0WMN1gTlY-nipfpZz_p6C49N"
                target="_blank">Electrical Power Systems (Arabic)</a>
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
