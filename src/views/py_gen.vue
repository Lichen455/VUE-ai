<template>
  <div class="box">
      <div class="topColumn">
    <!-- <button @click="incrementDisplay">点击我</button> -->
    知识点&nbsp;:&nbsp;
    <input v-if="display.isAIMode === 1" v-model="display.knowledgePoint" type="text" class="input-field" style="width: 160px;"/>
    <select v-else v-model="display.knowledgePoint" class="dropdown" style="width: 160px; height: auto;transform:translateY(-5px);">
      <option value="">请选择知识要点（选择此项为不限）</option>
      <option value="1">注释</option>
      <option value="2">变量命名规则</option>
      <option value="3">缩进</option>
      <option value="4">input()函数</option>
      <option value="5">eval()函数</option>
      <option value="6">print()函数</option>
      <option value="7">输出控制：换行与不换行</option>
      <option value="8">变量概念</option>
      <option value="9">变量赋值</option>
      <option value="10">关键字大小写</option>
      <option value="11">算数运算符：+、-、*、/、**、%</option>
      <option value="12">数学内置函数：sum、max、min、round</option>
      <option value="13">类型转换函数：int、float、list、set、dict</option>
      <option value="14">字符串索引</option>
      <option value="15">字符串切片</option>
      <option value="16">字符串修改</option>
      <option value="17">字符串处理函数：str、len</option>
      <option value="18">字符串方法：split、join、replace、strip</option>
      <option value="19">字符串格式化输出：format</option>
      <option value="20">赋值机制：传值与传引用</option>
      <option value="21">变量作用域与命名空间</option>
      <option value="22">range()函数使用</option>
      <option value="23">range()函数步长</option>
      <option value="24">for循环迭代</option>
      <option value="25">迭代结构：字符串、文件、组合数据类型、range()</option>
      <option value="26">while循环</option>
      <option value="27">循环条件</option>
      <option value="28">循环变量</option>
      <option value="29">循环控制：else子句、continue、break</option>
      <option value="30">分支语句：单分支、双分支、多分支</option>
      <option value="31">比较操作符：==、=</option>
      <option value="32">random库使用</option>
      <option value="33">随机数生成方法</option>
      <option value="34">函数定义</option>
      <option value="35">函数调用</option>
      <option value="36">参数传递：引用传递、传值、传地址</option>
      <option value="37">打包传递</option>
      <option value="38">解包操作</option>
      <option value="39">函数参数缺省值</option>
      <option value="40">全局变量定义使用：global</option>
      <option value="41">lambda函数定义</option>
      <option value="42">lambda函数使用</option>
      <option value="43">lambda在排序中的使用</option>
      <option value="44">内置函数map使用</option>
      <option value="45">序列类型通用操作符：+、、in</option>
      <option value="46">组合数据类型内置函数：sorted()</option>
      <option value="47">sort()与sorted()的区别</option>
      <option value="48">sort()函数</option>
      <option value="49">sorted()函数</option>
      <option value="50">列表创建</option>
      <option value="51">列表赋值（地址传递）</option>
      <option value="52">列表索引</option>
      <option value="53">列表访问与修改</option>
      <option value="54">列表切片</option>
      <option value="55">列表常用方法：sort</option>
      <option value="56">列表常用方法：append</option>
      <option value="57">列表常用方法：pop</option>
      <option value="58">列表常用方法：insert</option>
      <option value="59">列表常用方法：remove</option>
      <option value="60">元组创建</option>
      <option value="61">元组访问</option>
      <option value="62">多变量赋值</option>
      <option value="63">元组不可变性</option>
      <option value="64">单个元素元组的表示</option>
      <option value="65">非标准元组表示</option>
      <option value="66">内置函数zip的用法</option>
      <option value="67">集合的概念</option>
      <option value="68">集合创建</option>
      <option value="69">集合元素要求：无序、不重复</option>
      <option value="70">set()去重复</option>
      <option value="71">集合操作方法：并集、交集、差集运算符</option>
      <option value="72">集合操作方法：add</option>
      <option value="73">集合操作方法：remove</option>
      <option value="74">字典创建</option>
      <option value="75">字典键的要求</option>
      <option value="76">zip函数：生成字典</option>
      <option value="77">字典创建</option>
      <option value="78">字典键的要求</option>
      <option value="79">zip函数：生成字典</option>
      <option value="80">zip函数：联合两个列表</option>
      <option value="81">字典成员判断：in</option>
      <option value="82">字典元素添加</option>
      <option value="83">字典get()方法</option>
      <option value="84">字典元素迭代方法：items</option>
      <option value="85">字典元素迭代方法：keys</option>
      <option value="86">字典元素迭代方法：values</option>
      <option value="87">直接对字典键的操作</option>
      <option value="88">列表推导式</option>
      <option value="89">集合生成式</option>
      <option value="90">字典生成式</option>
      <option value="91">推导式中的条件选择</option>
      <option value="92">文件类型</option>
      <option value="93">文件打开方式：读、写、追加</option>
      <option value="94">文件指针位置</option>
      <option value="95">文件打开方法</option>
      <option value="96">文件关闭方法</option>
      <option value="97">with open 上下文管理器</option>
      <option value="98">f.read() 文件读取</option>
      <option value="99">f.readlines() 文件读取</option>
      <option value="100">f.write() 文件写入</option>
      <option value="101">f.writelines() 文件写入</option>
      <option value="102">CSV库读写操作</option>
      <option value="103">JSON文件格式用途</option>
      <option value="104">JSON库文件读写</option>
      <option value="105">JSON序列化：dump()</option>
      <option value="106">JSON反序列化：load()</option>
      <option value="107">CSV与JSON格式转换算法</option>
      <option value="108">import 语句</option>
      <option value="109">import as 语句</option>
      <option value="110">from import 语句</option>
      <option value="111">pip install 命令</option>
      <option value="112">pip list 命令</option>
      <option value="113">类定义</option>
      <option value="114">对象创建</option>
      <option value="115">私有成员访问</option>
      <option value="116">类特殊方法</option>
      <option value="117">运算符重载</option>
      <option value="118">类继承</option>
      <option value="119">多继承</option>
      <option value="120">同名方法引用次序</option>
      <option value="121">构造函数定义</option>
      <option value="122">父类构造函数调用</option>

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
  const response = await axios.post('/api/generate-py-question', {
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