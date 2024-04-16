<template>
  <div>
    <div v-for="(box, index) in boxes" :key="index">
      <!-- 传给子组件序号 -->
      <BoxButton :index="index" @update-display="handleUpdateDisplay"/>
    </div>
    <!-- 添加加号图标的按钮 -->
    <button @click="addBox">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
    <button @click="removeBox">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>

    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import BoxButton from '../components/box_cardque.vue';

const boxes = ref([]);

function addBox() {
  boxes.value.push({display: 0});
}
function removeBox() {
  boxes.value.pop();
}
function handleUpdateDisplay(index) {
  // index 是子组件传递来的索引值
  console.log('Update display with index:', index);
  console.log('Update display with index:', boxes.value);
  //删除下标为index的盒子
  boxes.value.splice(index,1);
}
</script>

<style scoped>
/* 添加一些简单的样式来美化按钮 */
button {
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: inline-block;
  height: 50px;
  width: 50px;
  color: #007bff;
  border-radius: 30%; /* 使按钮圆形 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

button:hover {
  background-color: #f0f0f0;
}

/* 确保图标大小与按钮一致 */
.feather {
  width: 100%;
  height: 100%;
}
</style>
