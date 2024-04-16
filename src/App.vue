<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sidebar from './views/sidebar.vue'


</script>

<template>
  <!-- 这是顶部栏的设计 -->
<div class="navbar">
    <img src="../src/components/icons/zrx.png" alt="My Image">
</div>



<div class="main">
  
  <div class="content_2">
    <!-- 侧边栏的位置 -->
    <sidebar></sidebar>
    
  </div>
  <div class="content_3">
      <div class="content">
        <router-view></router-view>
      </div>
  </div>
  
</div>








</template>

<style>
/* 添加这一段来设置整个页面的背景色 */
body, html {
  height: 100vh;
  margin: 10;
  background-color: #fff8dadb; /* 这是一个暖色调的颜色 */
  overflow: auto;
}

</style>
<style scoped>


/* content_3是页面主要内容 */
  .content_3 {
    flex-grow: 1;
    flex-basis: 0; 
    height: 100%;

    display: flex;
    justify-content: center;

  }
  .content_2 {
    height: 100%;
  }
  .main2{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .main{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top:50px;
    
  }


  .navbar {
  background-color: #eace85;
  height: 50px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex; /* 添加这一行 */
  align-items: center; /* 添加这一行 */
  justify-content: center; /* 添加这一行 */
}

.navbar img {
  max-height: 100%; /* 添加这一行，确保图片不会超过顶部栏的高度 */
  max-width: 100%; /* 添加这一行，确保图片不会超过顶部栏的宽度 */
}


</style>