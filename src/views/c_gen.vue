<template>
    <div class="box">
        <div class="topColumn">
      <!-- <button @click="incrementDisplay">点击我</button> -->
      知识点&nbsp;:&nbsp;
      <input v-if="display.isAIMode === 1" v-model="display.knowledgePoint" type="text" class="input-field" style="width: 160px;"/>
      <select v-else v-model="display.knowledgePoint" class="dropdown" style="width: 160px; height: auto;transform:translateY(-5px);">
        <option value="0">选择知识要点(选择此项为不限)</option>
        <option value="1">文字常量</option>
        <option value="2">变量</option>
        <option value="3">const限定修饰符</option>
        <option value="4">指针</option>
        <option value="5">数组</option>
        <option value="6">字符串</option>
        <option value="7">引用</option>
        <option value="8">枚举</option>
        <option value="9">联合体</option>
        <option value="10">结构体</option>
        <option value="11">复数类型</option>
        <option value="12">pair类型</option>
        <option value="13">容器类型</option>
        <option value="14">typedef修饰符</option>
        <option value="15">volatile限定修饰符</option>
        <option value="16">复数操作</option>
        <option value="17">条件操作符</option>
        <option value="18">sizeof操作符</option>
        <option value="19">new和delete操作符</option>
        <option value="20">位操作符</option>
        <option value="21">bitset类型</option>
        <option value="22">运算符优先级</option>
        <option value="23">类型转换</option>
        <option value="24">声明语句</option>
        <option value="25">域和生命周期</option>
        <option value="26">函数</option>
        <option value="27">重载函数</option>
        <option value="28">函数模板</option>
        <option value="29">异常处理</option>
        <option value="30">泛型算法</option>
        <option value="31">类定义和访问权限</option>
        <option value="32">友元访问</option>
        <option value="33">类的初始化、赋值和析构</option>
        <option value="34">类的构造函数</option>
        <option value="35">类的数据成员初始化</option>
        <option value="36">类的析构函数</option>
        <option value="37">重载操作符和用户定义的转换</option>
        <option value="38">操作符重载</option>
        <option value="39">友元访问在操作符重载的应用</option>
        <option value="40">类模板的定义与实例化</option>
        <option value="41">类模板中的友元声明</option>
        <option value="42">类模板的静态数据成员</option>
        <option value="43">基类和派生类的定义</option>
        <option value="44">继承关系中类的构造函数与析构函数的调用顺序</option>
        <option value="45">基类与派生类的虚拟函数</option>
        <option value="46">虚析构函数</option>
        <option value="47">错误处理</option>
        <option value="48">高级C++</option>

      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      题型&nbsp;:&nbsp;
      <select v-model="display.questType" class="dropdown" style="transform:translateY(-5px); height: 41px;">
        <option value="">请选择题型</option>
        <option value="1">通用判断题</option>
        <option value="2">通用选择题</option>
        <option value="3">通用填空题</option>
        <option value="4">解释程序题</option>
        <option value="5">程序填空题</option>
        <option value="6">编程大题</option>
        <option value="7">算法题</option>

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
        <textarea v-model="display.questionStem" :placeholder="display.questionStem" style="border:0;border-radius:5px;background-color:rgba(241,241,241,.98);height:350px;padding:10px;resize:none;" placeholder="题目返回区" class="input-field" />
      </div>
      <button v-if="!display.questionStem" @click="changeQuestionStem('请等待...'),sendRequest()" >生成题目</button>
      <button v-if="display.questionStem" @click="changeQuestionStem('请等待...'),sendRequest()">重新生成</button>
      <button @click="Clearbox(1)" class="button2">清除</button>
      <p class="lsdata">内部数据(便于debug)： {{ display }} {{ props.index }}</p>
    </div>
    
  </template>
  <script setup>
//   import dropdown_py from './components/dropdown_py.vue'
  import { reactive } from 'vue';
  import axios from 'axios';

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
  function Clearbox() {
    display.questionStem = "";
  }
  
    // 写了个这个，直接v-model更改isAIMode似乎检测不到，更新不了渲染
    function toggleMode() {
  display.isAIMode = display.isAIMode === 1 ? 0 : 1; // 切换模式
  display.knowledgePoint = "";
}
  function toggleMode2() {
  display.isAIMode = display.isAIMode === 1 ? 0 : 0; // 切换模式
  display.knowledgePoint = 0;
}

// 发送axios请求
const sendRequest = async () => {
  try {
    // 这里是你要发送请求的 URL 和其他配置
    const response = await axios.post('/api/generate-c-question', {
      // 发送请求时附带的参数
      knowledgePoint: display.knowledgePoint,
      questType: display.questType,
      isAIMode: display.isAIMode
    });

    // 处理响应
    display.questionStem = response.data.questionStem; // 假设响应中包含题目内容
  } catch (error) {
    // 处理错误
    console.error(error);
  }
};

  </script>
  
  <style scoped>
.lsdata {
    width: 820px;
    resize: none;
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
    top: 30px;
    margin-top: 30px;
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
    white-space: normal;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s ease;
    &:focus {
      border-color: #007bff;
    }
  }
  
  /* 按钮样式 */
  button {
          border: none;
          border-radius: 4px;
           display:inline-block;
           padding:6px 25px;
           font-size:20px;
           cursor:pointer;
           text-align:center;
           text-decoration:none;
           outline:none;
           color:#fff;
           background-color:#336699;
           margin:4px 2px;
  }
  button:hover{
    background-color:#1795bb;
  }
  button:active{
    background-color:#1795bb;
    
    transform:translateY(4px);
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
    border: none;
          border-radius: 4px;
           display:inline-block;
           padding:6px 20px;
           font-size:20px;
           cursor:pointer;
           text-align:center;
           text-decoration:none;
           outline:none;
           color:#fff;
           background-color:#CC0033;
           margin:4px 2px;
}
.button2:hover{
    background-color:#FF6666;
  }
.button2:active{
    background-color:#FF6666;
    transform:translateY(4px);
  }
  </style>