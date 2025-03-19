<template>
  <div id="app">
    <Sidebar />  <!-- Sidebar 컴포넌트 추가 -->
    
  </div>
  <div>
    
    <nav>
      <!-- 클릭하면 페이지가 바뀌는 버튼 같은거 -->
      
    </nav>
    <router-view /><!-- 여기 부분이 매번 페이지가 바뀌는 '공간' -->
  </div>
  
  
</template>

<script>
import Sidebar from './components/Sidebar.vue'
// import json1 from './components/laodjson.vue'
import router from './router';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



</style>
<style>
</style>
