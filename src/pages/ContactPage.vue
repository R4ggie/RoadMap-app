<script setup lang="ts">

import roadLogo from '/logoRoad.png'

</script>

<template>
  <div dir="rtl" lang="ar" class="body">
    <div class="content">
      <div class="box">
        <h3>من نحن</h3>
        <p>بوت "ارسم مسارك" صُمّم لمساعدتك على رسم طريقك نحو التعلم والتطوير الذاتي بخطوات واضحة ومبسطة.
          هدفنا نساعدك تختار مجالك المفضل — سواء برمجة، تصميم، لغات، أو حتى مهارات شخصية — ونرسم لك خطة تعلم تناسب وقتك
          وقدراتك.</p>
      </div>
      <div class="box">
        <img :src="roadLogo" alt="">
        <h3>رسالتنا</h3>
        <p>نطمح إلى عالم يستطيع فيه كل شخص تطوير نفسه وتحقيق أهدافه، عبر خطط واضحة ودعم مناسب يلبي احتياجاته.</p>
      </div>
      <div class="box">
        <h3>رؤيتنا</h3>
        <p>نسعى لجعل رحلة التعلّم سهلة، ممتعة، ومليئة بالإلهام، بحيث تصبح المعرفة في متناول الجميع.</p>
      </div>
      <div class="box">
        <h3>قيمنا</h3>
        <p>البساطة في تقديم المحتوى، الإلهام الذي يدفعك للاستمرار، والدعم المستمر لمرافقتك في كل خطوة</p>
      </div>
      <div class="box">
        <h3>هل لديك اقتراح؟</h3>
        <p>يسعدنا سماع آرائكم وأفكاركم! لا تترددوا في التواصل معنا.</p>
        <div class="icons">

          <a href="https://t.me/cetsu_bot" target="_blank">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61566628087431" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/Student-Unit-Of-CET" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>

        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.body {
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 70px;
  margin-bottom: 0px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.icons {
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  gap: 20px;
}

img {
  max-width: 40%;
}

a {
  text-decoration: none;
  color: white;
}

p {
  margin: 0px;
}

h3 {
  font-size: 20px;
  margin: 0px;
}
</style>
