<script setup lang="ts">

import cyber from "/cyberapp.png";

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
        <img :src=cyber alt="cybersecurity" />
        <div class="text">
          <h4>الأمن السيبراني Cybersecurity</h4>
        </div>
      </div>


      <!-- subjects -->
      <div class="subjcts">
        <ul>
          <li>
            <h4>أساسيات الأمن السيبراني (Cybersecurity Fundamentals)</h4>
            <p>أنواع الهجمات (Malware, Phishing, DoS) </p>
            <p>مبادئ التشفير (Encryption basics) </p>
          </li>
          <li>
            <h4>أنظمة التشغيل والأمان (OS & System Security) </h4>
            <p>Linux basics (خصوصًا Kali, Ubuntu) </p>
            <p>Windows Security Basics </p>
            <p>إدارة الصلاحيات والجدران النارية (firewalls) </p>
          </li>
          <li>
            <h4>الشبكات وأمنها (Network Security) </h4>
            <p>TCP/IP, OSI Model </p>
            <p>VPN, IDS/IPS, Proxy, Firewalls </p>
            <p>Wireshark, Nmap, Burp Suite basics </p>
          </li>
          <li>
            <h4>الاختبار والاختراق الأخلاقي (Ethical Hacking & Penetration Testing) </h4>
            <p>Reconnaissance, Scanning, Exploitation </p>
            <p>Web App Security </p>
            <p>Social Engineering basics </p>
          </li>
          <li>
            <h4>الاستجابة للحوادث والتحليل الجنائي (Incident Response & Forensics) </h4>
            <p>جمع الأدلة وتحليلها </p>
            <p>Malware analysis basics </p>
          </li>
          <li>
            <h4>أمن التطبيقات والبرمجة (Application Security) </h4>
            <p>OWASP Top 10 </p>
            <p>Secure coding practices </p>
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
              <a href="https://www.youtube.com/@NetworkChuck" target="_blank">NetworkChuck</a>
              <a href="https://www.youtube.com/watch?v=VbEx7B_PTOE&list=PLIhvC56v63IJIujb5cyE13oLuyORZpdkL"
                target="_blank">Linux for Hackers</a>
              <a href="https://www.youtube.com/watch?v=EY-Scg1z6zA&list=PLIhvC56v63IKhe8PAIW68xeGtUOorhLIn&index=1"
                target="_blank">First Hacking certification (PenTest+) </a>
              <a href="https://www.youtube.com/watch?v=yLf2jRY39Rc&list=PLIhvC56v63IIyU0aBUed4qwP0nSCORAdB"
                target="_blank">FREE Security+ SY0-601 // Complete Course</a>
              <a href="https://www.youtube.com/c/thecybermentor" target="_blank">The Cyber Mentor</a>
              <a href="https://www.youtube.com/@_JohnHammond" target="_blank">John Hammond Channel</a>
              <a href="https://tryhackme.com/" target="_blank">Try Hack Me</a>
              <a href="https://www.stationx.net/courses/complete-cyber-security-course-bundle/" target="_blank">The
                Complete Cyber Security Course Bundle</a>
              <a href="https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US"
                target="_blank">Introduction to Cybersecurity</a>
              <a href="https://www.cybrary.it/free-content" target="_blank">Free Cybersecurity Courses & Hacking
                Training</a>
              <a href="https://www.hackthebox.com/hacker/hacking-labs" target="_blank"> Hack The Box: Cybersecurity
                Training </a>
              <a href="https://owasp.org/www-community/Free_for_Open_Source_Application_Security_Tools"
                target="_blank">Open Source Application Security Tools</a>

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

.subjcts li {
  margin-bottom: 70px;
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
