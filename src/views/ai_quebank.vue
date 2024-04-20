<template>
  <div class="question-list">
    <QueBankItem @select-change="handleSelectChange" @page-change="handleSelectChange" v-for="question in queBank" :key="question.id" :question="question"></QueBankItem>
    <question-item v-for="question in questions" :key="question.id" :question="question"></question-item>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import QuestionItem from '../components/QuestionItem.vue';
import QueBankItem from '../components/QueBankItem.vue';
import axios from 'axios';

const queBank = ref([
  { id: 1, type: '题库总体概览', content: '这是第一个题目，它有一些描述信息。', knowledgePoint: '知识点A' },
]);

const questions = ref([
  { id: 1, type: '选择题', content: '这是第一个题目，它有一些描述信息。', knowledgePoint: '知识点A' },
  { id: 2, type: '判断题', content: '这是第二个题目，它也有描述信息。', knowledgePoint: '知识点B' },
  // ... 更多默认题目 ...
]);

const handleSelectChange = async (choose, choose2, page = 1) => {
  try {
    // 发送 POST 请求
    // 格式是 {choose: 题型, choose2: 语言 , page: 页码}  一页可以放13个题，从1开始，所以请返回：ID （页码-1）*13 ~ （页码*13 - 1）的题目
    const response = await axios.post('/api/bank-questions', {
      choose: choose,
      choose2: choose2,
      page : page
    });
    if (response.status === 200) {
      questions.value = response.data;
    }
  } catch (error) {
    console.error('An error occurred while fetching questions:', error);
    // 使用默认值
    questions.value = [
      { id: 1, type: '', content: '[Not found] 请求失败，题库连接错误或者不存在', knowledgePoint: '' }
      // ... 更多默认题目 ...
    ];
  }
};


onMounted(() => {
  // 初始化时可以调用 handleSelectChange 来获取默认数据
  handleSelectChange('', '');
});
</script>


<style scoped>
.question-list {
  max-width:1500px; /* 设置最大宽度 */
  margin: 0 auto; /* 水平居中 */
  padding: 2rem;
}
</style>
