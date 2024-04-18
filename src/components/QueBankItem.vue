<template>
  <div class="quebank-item" :class="{ 'is-expanded': isExpanded }">
    <div class="type-icon">{{ question.type }}</div>
    <div class="content">{{ question.content }}</div>
    <div class="select-container">
      <select v-model="question.choose" class="dropdown" style="transform:translateY(-5px); height: 40px;">
        <option value="">请选择题型</option>
        <option value="1">通用判断题</option>
        <option value="2">通用选择题</option>
        <option value="3">通用填空题</option>
        <option value="4">解释程序题</option>
        <option value="5">程序填空题</option>
        <option value="6">编程大题</option>
        <option value="7">算法题</option>
      </select>
    </div>
    <div class="select-container">
      <select v-model="question.choose" class="dropdown" style="transform:translateY(-5px); height: 41px;">
        <option value="">请选择题型</option>
        <option value="1">通用判断题</option>
        <option value="2">通用选择题</option>
        <option value="3">通用填空题</option>
        <option value="4">解释程序题</option>
        <option value="5">程序填空题</option>
        <option value="6">编程大题</option>
        <option value="7">算法题</option>
      </select>
    </div>
    <div class="expand-icon" @click="toggleExpand">
      <span v-if="!isExpanded" style="cursor: pointer;">+</span>
      <span v-else style="cursor: pointer;">-</span>
    </div>
    <transition name="fade">
      <div class="full-content" v-if="isExpanded">
        <div ref="echartsRef" style="width: 600px; height: 400px;"></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import * as echarts from 'echarts';

// 直接在子组件内部定义题目数据
const question = {
  id: 1,
  type: '题库总体概览',
  content: '这是第一个题。',
  knowledgePoint: '知识点A',
  choose:""
};

// 用于控制 .full-content 显示的响应式状态
const isExpanded = ref(false);
// 用于在 JavaScript 中引用 ECharts 容器
const echartsRef = ref(null);
// 用于存储 ECharts 实例
let myChart = null;

// 切换 isExpanded 值的函数，用于展开/收起内容
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

// ECharts 的配置项
const option = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

// 监听 isExpanded 的变化
watch(isExpanded, (newValue) => {
  // 如果 isExpanded 变为 true，等待 DOM 更新后初始化 ECharts
  if (newValue) {
    nextTick(() => {
      if (!myChart && echartsRef.value) {
        myChart = echarts.init(echartsRef.value);
        myChart.setOption(option);
      }
    });
  } else if (myChart) {
    // 如果 isExpanded 变为 false，销毁 ECharts 实例
    myChart.dispose();
    myChart = null;
  }
});
</script>
  
  <style scoped>
  .quebank-item {
    display: flex;
    align-items: center;
    width: 1200px; /* 设置最大宽度 */
    height: 50px;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background-color: #ffffea;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  

  
  .type-icon {
    width: 150px;
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
    transform: translateY(113%);
    height: 400px;
  }
  .is-expanded {
    margin-bottom: 400px; /* 展开时的 margin-bottom */
  }
  .dropdown {
  margin-top: 10px;
  width: 40%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box; /* 防止输入框大小超过父容器 */
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: #007bff;
  }
}

.select-container {
  flex: 1;
  margin-left: 0rem; /* 创建左侧的空白 */
}
  </style>
  