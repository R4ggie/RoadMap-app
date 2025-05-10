<script setup lang="ts">

import mobapp from "/mobapp.png";

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
        <img :src=mobapp alt="mobapp" />
        <div class="text">
          <p>تطبيقات الهاتف Mobile Application</p>
        </div>
      </div>

      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <p>Fluttter - Dart (Andriod/IOS)</p>
          </li>
          <li>
            <p>Android Studio - Kotlin (Android)</p>
          </li>
          <li>
            <p>Xcode - Swift (IOS)</p>
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
              <h4>لتعلم Flutter - Dart</h4>
              <a href="https://www.youtube.com/watch?v=3kaGC_DrUnw" target="_blank">Ultimate Flutter Tutorial by Flutter
                Mapp</a>
              <a href="https://arabflutter.com/dart/" target="_blank">Dart Course by Arab-Flutter (Arabic)</a>
            </li>

            <li class="item">
              <h4>لتعلم Android Studio - Kotlin</h4>
              <a href="https://www.youtube.com/watch?v=TEXaoSC_8lQ" target="_blank">Kotlin Tutorial by Amigoscode</a>
              <a href="https://www.youtube.com/watch?v=EExSSotojVI" target="_blank">Kotlin Programming by
                FreeCodeCamp</a>
            </li>

            <li class="item">
              <h4>لتعلم Xcode - Swift</h4>
              <a href="https://www.geeksforgeeks.org/swift-tutorial/" target="_blank">Swift Tutorial By GeekforGeeks</a>
              <a href="https://www.youtube.com/watch?v=8Xg7E9shq0U" target="_blank">Swift Programming Tutorial by
                FreeCodeCamp</a>
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
