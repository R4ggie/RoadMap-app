<script setup lang="ts">

import Mobile from "/mobileTele.png";

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
        <img :src=Mobile alt="Mobile" />
        <div class="text">
          <h4> شبكات الموبايل Mobile Networks</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>GSM, UMTS, LTE, 5G basics </p>
          </li>
          <li>
            <p>RF Planning, Optimization </p>
          </li>
          <li>
            <p>معرفة معدات الشبكات (BTS, NodeB, eNodeB) </p>
          </li>
          <li>
            <p>أدوات مثل TEMS, Atoll</p>
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
              <a href="https://www.youtube.com/watch?v=SbYltPawklg" target="_blank">5G wireless standard design
                Course</a>
              <a href="http://4g5gworld.com/" target="_blank">4G5GWorld</a>
              <a href="https://www.coursera.org/learn/5g-training-qualcomm" target="_blank">5G for Everyone</a>
              <a href="https://www.tutorialspoint.com/lte/index.htm" target="_blank">LTE Tutorial</a>

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
