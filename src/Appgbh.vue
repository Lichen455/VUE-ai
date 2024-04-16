<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import sidebar from './views/sidebar.vue'
</script>

<template>

<div class="navbar">
  我是顶部栏！
  
</div>

<div class="container_main">
<div class="container_sidebar">
  <div class="sidebar">
    <!-- 侧边栏内容 -->
    <h2>Sidebar</h2>
    <p>This is the sidebar content.</p>
  </div>
  <div class="content">
    <!-- 主内容 -->
    <h2>Main Content</h2>
    <p>This is the main content area.</p>
  </div>
  <div class="content">
    <!-- 主内容 -->
    <nav class="sideberx">
        <RouterLink to="/page2">page2</RouterLink>
    </nav>
  </div>
  <div class="content">
    <!-- 主内容 -->
    <nav class="sideberx">
        <RouterLink to="/about" class="sideberx">page1</RouterLink>
    </nav>
  </div>

</div>

<div class="content_2">
123
</div>
</div>

</template>

<style scoped>
.content_2{
  flex-grow:1;

  color: aqua;
}
  .navbar{
    background-color: #eace85;
    height: 50px;
    width: 100%;
    position: absolute;
    left: 0;
    top:0;
    
  }
  .sidebarx{
    background-color: #4f6106;
  }
  .container_main{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
    /* 设置盒子的位置，使其紧贴左边 */
    position: absolute;
    left: 0;
    top:50px;

    align-items: flex-start;
  }
  /* 设置侧边栏容器的样式 */
  .container_sidebar {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content:start;
    /* 设置盒子的位置，使其紧贴左边 */
    position: absolute;
    left: 0;
    top:0px;
    flex-grow: 1;
  }
  /* 设置侧边栏抬头的样式 */
  .sidebar {
    width: 300px; /* 侧边栏宽度 */
    background-color: #d0fafd; /* 侧边栏背景颜色 */
    padding: 20px; /* 侧边栏内边距 */
    margin: 0px; /* 侧边栏外边距 */
  }
  /* 设置主内容的样式 */
  .content {
    width: 300px;
    padding: 20px; /* 主内容内边距 */
    margin: 0px; /* 主内容外边距 */
    background-color: #e6f0bc; /* 主内容背景颜色 */
  }
</style>