<script setup lang="ts">

import ai from '/aiCont.png';

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
        <img :src=ai alt="AI" />
        <div class="text">
          <h4>الذكاء الأصطناعي AI</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>Neural Network</p>
          </li>
          <li>
            <p>Image Processing</p>
          </li>
          <li>
            <p>Machine Learning</p>
          </li>
          <li>
            <p>Deep Learning</p>
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
              <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank">Neural
                Network 3blue1brown</a>
              <a href="https://www.freecodecamp.org/news/create-computer-vision-apps-in-the-cloud-with-opencv-and-python/"
                target="_blank">Python and OpenCV Course</a>
              <a href="https://www.coursera.org/learn/machine-learning" target="_blank">Supervised Machine Learning</a>
              <a href="https://www.coursera.org/specializations/machine-learning-introduction" target="_blank">Machine
                Learning Specialization</a>
              <a href="https://www.coursera.org/specializations/deep-learning" target="_blank">Deep Learning
                Specialization</a>
              <a href="https://www.youtube.com/@CodeEmporium" target="_blank">CodeEmporium</a>

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
