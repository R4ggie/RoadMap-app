<script setup lang="ts">

import deskapp from "/deskapp.png";

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
        <img :src=deskapp alt="deskapp" />
        <div class="text">
          <p>تطبيقات سطح المكتب Desktop Application</p>
        </div>
      </div>

      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>WPF / WinForms (C#)</p>
          </li>
          <li>
            <p>Swing / JavaFX (Java)</p>
          </li>
          <li>
            <p>Tinker / PyQt (Python)</p>
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
              <h4>لتعلم #WPF C</h4>
              <a href="https://www.youtube.com/watch?v=t9ivUosw_iI" target="_blank">C# WPF Tutorial By
                Kampa Plays
              </a>
              <a href="https://www.youtube.com/watch?v=t9ivUosw_iI" target="_blank">C# Tutorial By W3schools</a>
            </li>

            <li class="item">
              <h4>لتعلم Swing Java </h4>
              <a href="https://www.youtube.com/watch?v=gJrjgg1KVL4" target="_blank">Java GUI: Full Course By
                Bro-Code</a>
              <a href="https://www.geeksforgeeks.org/introduction-to-java-swing/" target="_blank">
                Introduction to Java Swing By GeekForGeeks</a>

            </li>

            <li class="item">
              <h4>لتعلم JavaFx Java </h4>
              <a href="https://www.geeksforgeeks.org/javafx-tutorial/" target="_blank">JavaFX Tutorial By
                GeekForGeeks</a>
              <a href="https://www.youtube.com/watch?v=9XJicRt_FaI" target="_blank">JavaFX GUI Full Course By
                Bro-Code</a>

            </li>

            <li class="item">
              <h4>لتعلم Tinker Python </h4>
              <a href="https://www.geeksforgeeks.org/python-gui-tkinter/" target="_blank">Python Tkinter Tutorial By
                GeekForGeeks</a>
              <a href="https://www.youtube.com/watch?app=desktop&v=TuLxsvK4svQ&t=10894s" target="_blank">Python Tkinter
                Tutorial By Bro-Code</a>
            </li>

            <li class="item">
              <h4>لتعلم PyQt Python </h4>
              <a href="https://www.youtube.com/watch?v=JBME1ZyHiP8" target="_blank">Python PyQt Tutorial By
                Sentdex</a>
              <a href="https://www.youtube.com/watch?v=LXuM0_Y-6QA" target="_blank">Python Tkinter
                Tutorial By SMA-CODING (Arabic)</a>
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
