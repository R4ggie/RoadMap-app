<script setup lang="ts">

import robot from "/robotCont.png";

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
        <img :src=robot alt="robotic" />
        <div class="text">
          <h4>الروبوتات والتحكم بالحركة Robotics & Motion Control</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>اساسيات الروبوتات</p>
          </li>
          <li>
            <p>PID Controller</p>
          </li>
          <li>
            <p>Fuzzy Logic</p>
          </li>
          <li>
            <p>Python programming language</p>
          </li>
          <li>
            <p>نظام تشغيل االروبوتات ROS</p>
          </li>
          <li>
            <p>معالجة الصور والرؤية الحاسوبية</p>
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
              <a href="https://www.youtube.com/watch?v=vnj7gZmbfQI" target="_blank">Robot Operating System (ROS)
                (Arabic)</a>
              <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank">Python Coding
                (Arabic)</a>
              <a href="https://www.youtube.com/watch?v=wkfEZmsQqiA" target="_blank">PID Control Lesson</a>
              <a href="https://youtu.be/ggFz93ZZmqM?si=43UKRiBs7jSS6mqX" target="_blank">Learning Robotics (Arabic)</a>
              <a href="https://www.youtube.com/watch?v=nSxQHT2vYNI&list=PLlrUUvm2qeMmz5lVAHcmYj8VCeXZjVt6M"
                target="_blank">PMP Course (Arabic)</a>
              <a href="https://www.youtube.com/watch?v=-tRoIyzm1oM" target="_blank">Fuzzy Logic Design</a>



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
