<template>
  <div class="sidebar-container">
    
    <!-- 오버레이 (사이드바 열릴 때만 보임) -->
    <div v-if="isOpen" class="overlay" @click="toggleSidebar"></div>

    <!-- 사이드바 -->
    <div class="sidebar" :class="{ open: isOpen }" @wheel="handleWheel">
      <button class="close-btn" @click="toggleSidebar">✖</button>
      <ul>
        <li><router-link to="/">홈으로</router-link></li>
        <li><router-link to="/class3">3-3</router-link></li>
        <li @click="isOpenUnder1 = !isOpenUnder1"><a href="#">과목</a></li>
          <div class="undersidebar1" :class="{ open: isOpenUnder1}" >
            <ul class="router">
              <li><router-link to="/korean">독서</router-link></li>
              <li><router-link to="/english">영어</router-link></li>
              <li><router-link to="/calculus">미적분</router-link></li>
              <li><router-link to="/physics">물리</router-link></li>
              <li><router-link to="/chemistry">화학</router-link></li>
              <li><router-link to="/Convergence_science">융합과학</router-link></li>
              <li><router-link to="/enginerring">공학일반</router-link></li>
              <li><router-link to="/logic">논리학</router-link></li>
              <li><router-link to="/geometry">기하</router-link></li>
              <li><router-link to="/math_problem">수학과제탐구 </router-link></li>
              <li><router-link to="/sports">스포츠생활</router-link></li>
            </ul>
          </div>
        <li><a href="#">정보</a></li>
        <li>체육대회(업데이트 중)</li>
      </ul>
    </div>

    <!-- 사이드바 열기 버튼 -->
    <button class="menu-btn" @click="toggleSidebar">☰</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const isOpenUnder1 = ref("none")

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
const sidebar = ref(null);

// 휠 이벤트 핸들러
const handleWheel = (event) => {
  if (event.deltaY > 0) {
    sidebar.value.scrollTop += 50;  // 아래로 스크롤
  } else {
    sidebar.value.scrollTop -= 50;  // 위로 스크롤
  }
};
</script>

<style>
/* 전체 컨테이너 */
.sidebar-container {
  position: relative;
}

/* 오버레이 (사이드바 열릴 때만 보임) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* 사이드바 기본 스타일 */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* 기본적으로 숨김 */
  width: 250px;
  height: 100%;
  background: #333;
  color: white;
  transition: left 0.3s ease-in-out;
  z-index: 999;
  padding-top: 50px;
  overflow-y: scroll;
}

/* 사이드바 열릴 때 */
.sidebar.open {
  left: 0;
}

/* 사이드바 내부 리스트 */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  padding: 15px;
  text-align: center;
  font-size: 20px;
}


.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.undersidebar1 {
  background: rgb(73, 73, 73);
  color: rgb(158, 106, 106);
}
.sidebar .router .router-link {
  color: rgb(0,0,0);
}

.undersidebar1.open {
  display: none;
}

/* 닫기 버튼 */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

/* 사이드바 열기 버튼 */
.menu-btn {
  position: fixed;
  top: 10px;
  left: 10px;
  background: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  z-index: 1000;
}
.router li router-link{
  font-size: 15px;
  color: #000;
}
</style>
