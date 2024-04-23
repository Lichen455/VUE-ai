<template>
  <div class="quebank-item" :class="{ 'is-expanded': isExpanded }">
    <div class="type-icon"><svg t="1713516633474" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1489" width="28" height="28" style="transform: translateY(20%);"><path d="M793.6 682.8288V460.8H243.2v221.7088C108.3008 675.904 0 565.5424 0 431.5904c0-129.856 98.1248-234.56 230.4-251.2512C281.6 79.8336 388.224 12.8 512 12.8c157.8496 0 285.8496 108.8768 315.7248 251.2384C934.4 272.4096 1024 364.544 1024 473.3824c0 117.2864-93.8752 209.4464-213.376 209.4464H793.6z" fill="#f4ea2a" opacity=".3" p-id="1490"></path><path d="M518.4 833.4336c-151.9872 0-275.2-42.9824-275.2-96V864c0 53.0176 123.2128 96 275.2 96S793.6 917.0176 793.6 864v-126.5664c0 53.0176-123.2128 96-275.2 96z m0-197.184c-151.9872 0-275.2-42.9696-275.2-96V672c0 53.0176 123.2128 96 275.2 96S793.6 725.0176 793.6 672V540.2496c0 53.0304-123.2128 96-275.2 96zM243.2 467.2c0 53.0176 123.2128 96 275.2 96S793.6 520.2176 793.6 467.2c0-53.0176-123.2128-96-275.2-96S243.2 414.1824 243.2 467.2z" fill="#f4ea2a" p-id="1491"></path></svg> {{ question.type }}</div>
<div class="secondrow">

    <div class="select-container">
      <select v-model="question.choose"  @change="onSelectChange" class="dropdown" style="transform:translateY(-5px); height: 40px;">
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
      <select v-model="question.choose2"  @change="onSelectChange" class="dropdown" style="transform:translateY(-5px); height: 41px;">
        <option value="0">C++</option>
        <option value="1">Python</option>


      </select>
      
    </div>
    <div class="pagination">
      <button @click="prevPage">上一页</button>
      <span>第 {{ currentPage }} 页</span>
      <button @click="nextPage">下一页</button>
    </div>
    <div class="expand-icon" @click="toggleExpand" style="align-self: flex-end;">
      <span v-if="!isExpanded" style="cursor: pointer;">+</span>
      <span v-else style="cursor: pointer;">-</span>
    </div>
  </div>
    <transition name="fade">
      <div class="full-content" v-if="isExpanded">
        <div ref="pieChartRef" style="width: 600px; height: 400px;"></div>
        <div ref="barChartRef" style="width: 600px; height: 400px;"></div>
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
  content: '',
  knowledgePoint: '知识点A',
  choose: "",
  choose2: "",
};

const isExpanded = ref(false);

const pieChartRef = ref(null);
const barChartRef = ref(null);
let pieChart = null;
let barChart = null;

const currentPage = ref(1); // 初始化当前页码为1
const emit = defineEmits(['select-change', 'page-change']);

const onSelectChange = () => {
  emit('select-change', question.choose, question.choose2,1);
};

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit('page-change', question.choose, question.choose2, currentPage.value);
  }
};

const nextPage = () => {
  currentPage.value++;
  emit('page-change', question.choose, question.choose2, currentPage.value);
};



// ECharts 的配置项
const option = {
  title: {
    text: '',
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
// 柱状图配置项
const barOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};
// 监听 isExpanded 的变化

// 监听 isExpanded 的变化
watch(isExpanded, async (newValue) => {
  if (newValue) {
    try {
      // 发送 axios 请求获取图表数据
      const response = await axios.post('/api/charts/data');
      // 假设响应体的数据结构如下：
//       {
//   title: {
//     text: '',
//     subtext: 'Fake Data',
//     left: 'center'
//   },
//   tooltip: {
//     trigger: 'item'
//   },
//   legend: {
//     orient: 'vertical',
//     left: 'left'
//   },
//   series: [
//     {
//       name: 'Access From',
//       type: 'pie',
//       radius: '50%',
//       data: [
//         { value: 1048, name: 'Search Engine' },
//         { value: 735, name: 'Direct' },
//         { value: 580, name: 'Email' },
//         { value: 484, name: 'Union Ads' },
//         { value: 300, name: 'Video Ads' }
//       ],
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 10,
//           shadowOffsetX: 0,
//           shadowColor: 'rgba(0, 0, 0, 0.5)'
//         }
//       }
//     }
//   ]
// };
      const chartData = response.data;

      // 使用从后端获取的数据更新 option
      option.title = chartData.pieTitle;
      option.tooltip = chartData.pieTooltip;
      option.legend = chartData.pieLegend;
      option.series = chartData.pieSeries;

      barOption.xAxis = chartData.barXAxis;
      barOption.yAxis = chartData.barYAxis;
      barOption.series = chartData.barSeries;

      nextTick(() => {
        if (!pieChart && pieChartRef.value) {
          pieChart = echarts.init(pieChartRef.value);
          pieChart.setOption(option);
        }

        if (!barChart && barChartRef.value) {
          barChart = echarts.init(barChartRef.value);
          barChart.setOption(barOption);
        }
      });
    } catch (error) {
      // 如果请求失败，使用默认值
      console.error('Error fetching chart data:', error);

      // 确保使用默认的 option 配置
      nextTick(() => {
        if (!pieChart && pieChartRef.value) {
          pieChart = echarts.init(pieChartRef.value);
          pieChart.setOption(option);
        }

        if (!barChart && barChartRef.value) {
          barChart = echarts.init(barChartRef.value);
          barChart.setOption(barOption);
        }
      });
    }
  } else {
    if (pieChart) {
      pieChart.dispose();
      pieChart = null;
    }

    if (barChart) {
      barChart.dispose();
      barChart = null;
    }
  }
});



</script>
  
  <style scoped>
  .quebank-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px; /* 设置最大宽度 */
    height: 100px;
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

  }
  .secondrow{
    display: flex;
    width: 100%;
    justify-content:flex-end;
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
    transform: translateY(126%);
    height: 400px;
    display: flex;

  }
  .is-expanded {
    margin-bottom: 400px; /* 展开时的 margin-bottom */
  }
  .dropdown {
  margin-top: 10px;
  width: 40%;
  padding: 10px;
  border: 1px solid #fff5a8; /* 暖色调边框 */
  border-radius: 4px;
  background-color: #fff5dc; /* 暖色调背景 */
  box-sizing: border-box; /* 防止输入框大小超过父容器 */
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;
  appearance: none; /* 移除默认箭头 */
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2212%22%20height%3D%2210%22%20viewBox%3D%220%200%2012%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.5%206L6%2010.5%2010.5%206%22%20stroke%3D%22%23ffcc99%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E'); /* 自定义箭头 */
  background-repeat: no-repeat;
  background-position: right 10px center;
}

.dropdown:hover {
  border-color: #ff9966; /* 暖色调边框悬停 */
}

.dropdown:focus {
  border-color: #ff9966; /* 暖色调边框焦点 */
  box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.5); /* 焦点时添加轻微的阴影效果 */
}


.select-container {
  display: flex;
  justify-content: center;
  flex: 50;
  margin-left: 0rem; /* 创建左侧的空白 */
}

.pagination {
  display: flex;
  align-items: center;
  margin-left: auto; /* 将翻页组件推到右边 */
}

.pagination span {
  margin: 0 5px;
}
  </style>
  