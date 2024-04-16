<template>
    <div class="box">
        <div class="topColumn">

      知识点&nbsp;:&nbsp;
      <input v-if="display.isAIMode === 1" v-model="display.knowledgePoint" type="text" class="input-field" style="width: 200px;"/>
      <select v-else v-model="display.knowledgePoint" class="dropdown" style="width: 200px; height: auto;">
        <option value="">请选择知识要点</option>
        <option value="1">选项1</option>
        <option value="2">选项2</option>
        <option value="3">选项3</option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      题型&nbsp;:&nbsp;
      <select v-model="display.questType" class="dropdown">
        <option value="">请选择知识要点</option>
        <option value="1">选项1</option>
        <option value="2">选项2</option>
        <option value="3">选项3</option>
      </select>
      
      <label>
        &nbsp;&nbsp;
        <input type="radio" value="0" v-model="display.isAIMode" @change="toggleMode2" />
            题库出题
        </label>
        &nbsp;&nbsp;
        <label>
            <input type="radio" value="1" v-model="display.isAIMode" @change="toggleMode" />
            AI出题
      </label>
    </div>
      
      <div class="input-wrapper">
        <input v-model="display.questionStem" :placeholder="display.questionStem" class="input-field" />
      </div>
      <button @click="changeQuestionStem('123')">生成题目</button>
      <button @click="Clearbox(1)" class="button2">清除</button>
      <p class="lsdata">内部数据(便于debug)： {{ display }} {{ props.index }}</p>
    </div>
    
  </template>
  <script setup>
//   import dropdown_py from './components/dropdown_py.vue'
  import { reactive } from 'vue';
  const emit = defineEmits(['update-display']);
  const display = reactive({
    value: 0,
    questType: 1,
    knowledgePoint: "", // 知识要点选项
    questionStem: "",
    isAIMode:0, //0为题库抽题模式 1为AI出题
    Clear:0, //为1时清除
  });

  const props = defineProps({
  index: {
    type: Number,
    default: 0
  }
});

  function incrementDisplay() {
    display.value += 1;
  }
  function changeQuestionStem(newContent) {
    display.questionStem = newContent;
  }
  function Clearbox(data) {
    display.Clear = data;
    emit('update-display', props.index);
  }
  
  // 写了个这个，直接v-model更改isAIMode似乎检测不到，更新不了渲染
  function toggleMode() {
  display.isAIMode = display.isAIMode === 1 ? 0 : 1; // 切换模式
}
  function toggleMode2() {
  display.isAIMode = display.isAIMode === 1 ? 0 : 0; // 切换模式
}

  </script>
  
  <style scoped>
.lsdata {
    width: 600px;
}

  .topColumn{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    align-items:center;
  }

  .box {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #e9ffa1;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    text-align: center;
  }
  
  .input-wrapper {
    margin-top: 10px;
  }
  
  .input-field {
    width: 100%;
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
  
  /* 按钮样式 */
  button {
    padding: 5px 15px;
    margin: 5px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #0056b3;
    }
  }
  
  p {
    margin: 0;
  }

  .dropdown {
  margin-top: 10px;
  width: 20%;
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

.button2 {
    padding: 5px 15px;
    margin: 5px;
    border: none;
    border-radius: 4px;
    background-color: #ff4444; /* 这里可以使用你喜欢的颜色 */
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
        background-color: #ff0000; /* 鼠标悬停时的颜色变化 */
    }
}
  </style>
  