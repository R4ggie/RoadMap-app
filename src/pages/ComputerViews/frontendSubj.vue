<script setup lang="ts">

import frontapp from "/frontapp.png";

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
        <img :src=frontapp alt="frontend" />
        <div class="text">
          <h4>تطبيقات الويب Front-end</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>HTML - CSS - Javascript</p>
          </li>
          <li>
            <p>React</p>
          </li>
          <li>
            <p>Vue.js</p>
          </li>
          <li>
            <p>Bootsrtrap</p>
          </li>
          <li>
            <p>
              Tailwind CSS
            </p>
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
              <h4>لتعلم HTML, CSS و Javascript ننصح ب التالي</h4>
              <a href="https://academy.hsoub.com/" target="_blank">أكاديمية حاسوب</a>
              <a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a>
              <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank">Net Ninja</a>
              <a href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp</a>
              <a href="The Complete JavaScript Course" target="_blank">The Complete JavaScript Course</a>
              <a href="https://developer.mozilla.org/en-US/" target="_blank">المرجع الرسمي MDN web doc</a>

            </li>

            <li class="item">
              <h4>لتعلم React</h4>
              <a href="https://www.udemy.com/course/react-redux/" target="_blank">Modern React with Redux</a>
              <a href="https://www.w3schools.com/REACT/DEFAULT.ASP" target="_blank">React Tutorial W3schools</a>
            </li>

            <li class="item">
              <h4>لتعلم vue.js</h4>
              <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA" target="_blank">Traversy Media Vue crash course</a>
              <a href="https://www.w3schools.com/REACT/DEFAULT.ASP" target="_blank">React Tutorial W3schools</a>
              <a href="https://dev.to/ericchapman/vue-js-101-part-1-first-baby-step-4f40">Dev To Vue 101</a>
            </li>

            <li class="item">
              <h4>لتعلم Bootsrtrap</h4>
              <a href="https://www.w3schools.com/bootstrap5/" target="_blank">Bootstrap 5 Tutorial w3schools</a>
              <a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank">Tutorial
                Republic Bootsrtrap</a>
            </li>

            <li class="item">
              <h4>لتعلم Tailwind CSS</h4>
              <a href="https://daily.dev/blog/tailwind-css-basics-for-beginners" target="_blank">Daily Dev Tailwind</a>
              <a href="https://www.youtube.com/watch?v=dFgzHOX84xQ" target="_blank">Traversy Media Tailwind Crash
                Course</a>
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
