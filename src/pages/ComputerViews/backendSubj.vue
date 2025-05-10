<script setup lang="ts">

import backapp from "/backapp.png";

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
        <img :src=backapp alt="backapp" />
        <div class="text">
          <p>تطبيقات الويب Back-end</p>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>JavaScript (Node.js/Express.js)</p>
          </li>
          <li>
            <p>Python (Django/Flask)</p>
          </li>
          <li>
            <p>PHP (Laravel)</p>
          </li>
          <li>
            <p>Ruby (Ruby On Rails)</p>
          </li>
          <li>
            <p>Java (Spring)</p>
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
              <h4>ننصح بالتالي لتعلم لغات البرمجة المطلوبة لكل Framework</h4>
              <a href="https://www.javascript.com/" target="_blank">Javascript.com</a>
              <a href="https://www.learnpython.org/" target="_blank">Learn Python</a>
              <a href="https://www.w3schools.com/php/" target="_blank">PHP W3schools</a>
              <a href="https://www.codecademy.com/learn/learn-ruby" target="_blank">Ruby Code Academy</a>
              <a href="https://www.programiz.com/java-programming" target="_blank">Java Programiz</a>
            </li>

            <li class="item">
              <h4>مقدمة عن مصطلحات ومفاهيم ال Backend</h4>
              <a href="https://www.w3schools.com/js/js_api_intro.asp" target="_blank">Web APIs</a>
              <a href="https://www.freecodecamp.org/news/apis-for-beginners/" target="_blank">APIs FreeCodeCamp</a>
              <a href="https://james-vu.com/blog/f/an-overview-of-authentication-authorization-for-beginners"
                target="_blank">Authentication & Authorization for Beginners</a>
            </li>


            <li class="item">
              <h4>لتعلم Node.js / Express.js</h4>
              <a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/?couponCode=LETSLEARNNOW"
                target="_blank">The Complete Node.js Developer Course</a>
              <a href="https://www.w3schools.com/nodejs/default.asp" target="_blank">Node.js Tutorial W3schools</a>
              <a href="https://www.codecademy.com/learn/learn-express" target="_blank">Learn Express.js CodeAcademy</a>
              <a href="https://www.youtube.com/watch?v=fBzm9zja2Y8" target="_blank">Express JS Full Course
                GreatStack</a>
            </li>

            <li class="item">
              <h4>لتعلم Djanngo/Flask</h4>
              <a href="https://www.freecodecamp.org/news/tag/flask/" target="_blank">Flak Framework FreeCodeCamp</a>
              <a href="https://www.geeksforgeeks.org/flask-tutorial/" target="_blank">Flask Tutorial GeekForGeeks</a>
              <a href="https://www.freecodecamp.org/news/tag/django/" target="_blank">Django Framework FreeCodeCamp</a>
              <a href="https://www.w3schools.com/django/" target="_blank">Django Tutorial W3schools</a>
            </li>

            <li class="item">
              <h4>لتعلم Laravel</h4>
              <a href="https://www.tutorialspoint.com/laravel/index.htm" target="_blank">Laravel Tutorials Point</a>
              <a href="https://www.youtube.com/watch?v=EU7PRmCpx-0" target="_blank">Laravel From Scratch Traversy
                Media</a>
            </li>

            <li class="item">
              <h4>لتعلم Ruby on Rails </h4>
              <a href="https://www.geeksforgeeks.org/flask-tutorial/" target="_blank">Ruby on Rails GeekForGeeks</a>
              <a href="https://www.youtube.com/watch?v=B3Fbujmgo60" target="_blank">Ruby On Rails Crash Course Traversy
                Media</a>
            </li>

            <li class="item">
              <h4>لتعلم Spring Boot </h4>
              <a href="https://www.youtube.com/watch?v=gJrjgg1KVL4" target="_blank">Spring Boot Tutorial</a>
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
