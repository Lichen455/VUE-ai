<template></template>
<script>
import axios from 'axios'

const sendRequest = async (path,parameter) => {
  try {
    // 这里是你要发送请求的 URL 和其他配置
    console.log(parameter);
    const response = await axios.post(path, parameter);

    // 处理响应
    return response.data; // 假设响应中包含题目内容
    
  } catch (error) {
    // 处理错误
    console.error(error);
  }
};
export default sendRequest;
</script>
<style>
</style>