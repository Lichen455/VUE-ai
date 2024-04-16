<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="box"></div>


</template>

<style scoped>
  .box {
    width: 200px; /* 盒子的宽度 */
    height: 200px; /* 盒子的高度 */
    background-color: #f0f0f0; /* 盒子的背景颜色 */
    
    /* 重点：将盒子的左右边距设置为0，上边距和下边距设置为自动 */
    margin-left: 0;
    margin-right: 0;
    margin-top: auto;
    margin-bottom: auto;
    
    /* 设置盒子的位置，使其紧贴左边 */
    position: absolute;
    left: 0;
  }
</style>