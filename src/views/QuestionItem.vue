<template>
  <div class="question-item" :class="{ 'is-expanded': isExpanded }">
    <div class="type-icon">{{ question.type }}</div>
    <div class="content">{{ question.content }}</div>
    <div class="knowledge-point">{{ question.knowledgePoint }}</div>
    <div class="expand-icon" @click="toggleExpand">
      <span v-if="!isExpanded" style="cursor: pointer;">+</span>
      <span v-else style="cursor: pointer;">-</span>
    </div>
    <transition name="fade">
      <div class="full-content" v-if="isExpanded">
        <!-- 添加一个 textarea -->
        <textarea
          class="text-area"
          v-model="question.content"
        ></textarea>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
});

const isExpanded = ref(false);
const content = ref(props.question.content); // 使用 ref 创建一个响应式引用

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.question-item {
  display: flex;
  align-items: center;
  width: 1200px; /* 设置最大宽度 */
  height: 50px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: #fffff6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  position: relative;
}

.question-item:hover {
  transform: translateY(-2px);
}

.type-icon {
  width: 80px;
  font-weight: bold;
  /* 简单的图标样式 */
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 5px;
  }
}

.content {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.knowledge-point {
  width: 150px;
}

.expand-icon {
  width: 30px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.full-content {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f6f6f6;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 100%;
  transform: translateY(140%);
  height: 130px;
}
.is-expanded {
  margin-bottom: 150px; /* 展开时的 margin-bottom */
}

.text-area {
  width: 100%;
  height: 100px; /* 设置合适的高度 */
  margin-top: 0rem;
  padding: 0.5rem;
  border: 1px solid #ccc; /* 添加边框 */
  border-radius: 4px; /* 圆角边框 */
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.5;
  resize:none;
  background-color: #f9f9f9; /* 轻微的背景色 */
}

.text-area:focus {
  outline: none; /* 移除焦点时的轮廓线 */
  border-color: #aaa; /* 焦点时边框颜色变化 */
}
</style>
