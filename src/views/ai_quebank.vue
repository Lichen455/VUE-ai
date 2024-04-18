<template>
  <div class="question-list">
    <QueBankItem v-for="question in queBank" :key="question.id" :question="question"></QueBankItem>
    <question-item v-for="question in questions" :key="question.id" :question="question"></question-item>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import QuestionItem from '../components/QuestionItem.vue';
import QueBankItem from '../components/QueBankItem.vue';
import { onMounted } from 'vue';
const queBank = ref([
{ id: 1, type: '题库总体概览', content: '这是第一个题目，它有一些描述信息。', knowledgePoint: '知识点A' },
]);
const questions = ref([
  { id: 1, type: '选择题', content: '这是第一个题目，它有一些描述信息。', knowledgePoint: '知识点A' },
  { id: 2, type: '判断题', content: '这是第二个题目，它也有描述信息。', knowledgePoint: '知识点B' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  { id: 3, type: '算法题', content: '这是第三个题目，它的描述信息很有趣。', knowledgePoint: '知识点C' },
  // 更多题目...
]);


const newQuestion = {
  id: 4,
  type: '问答题',
  content: '这是新插入的题目，它包含了新的描述信息。',
  knowledgePoint: '知识点D'
};



// 定义一个要在页面加载时执行的函数
const onPageLoad = () => {
  console.log('页面加载完成了！');
  questions.value.splice(1, 0, newQuestion);
};

// 使用 onMounted 钩子来调用 onPageLoad 函数
onMounted(() => {
  onPageLoad();
});

</script>

<style scoped>
.question-list {
  max-width:1500px; /* 设置最大宽度 */
  margin: 0 auto; /* 水平居中 */
  padding: 2rem;
}
</style>
