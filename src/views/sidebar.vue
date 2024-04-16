<template>
<div class="container_main">
<div class="content_1x">
<div class="sidebar">
    <!-- 侧边栏标题内容 -->
    <h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> ----用户</h2>
    <p>内测用户组</p>
</div>


  <div class="content">
    <!-- 主内容 -->
    <h2><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> 还在测试中</h2>
    <p>以下功能若有BUG请见谅啦（</p>
  </div>
  <div class="content">
    <!-- 主内容 -->
    <nav class="sideberx">
        <RouterLink to="/c_gen">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>  C++题目生成
        </RouterLink>
    </nav>
  </div>
  <div class="content">
    <!-- 主内容 -->
    <nav class="sideberx">
        <RouterLink to="/py_gen"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>  Python题目生成</RouterLink>
    </nav>
  </div>
  <div class="content">
    <!-- 主内容 -->
    <nav class="sideberx">
        <RouterLink to="/paper_gen"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
</svg> 模块化组卷系统</RouterLink>
    </nav>
  </div>
</div>

<div class="content_x">
    <!-- 主内容 -->
    <nav class="sideberx">
      <div style="display: flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
  <RouterLink to="/page1">    设置选项   </RouterLink>
</div>
    </nav>
</div>

</div>

</template>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
  font-size: 18px;
}
a:hover{
  background-color: rgb(255, 230, 90);
}
.router-link-active {
  text-decoration: none;
  color: #ffffff;
}
.router-link-active:hover {
  text-decoration: none;
  color: #1199fb;
}

  .sidebarx{
    color: #1f08d3!important;
  }

  .container_main{
    display: flex;
    background-color: #f6ce68;
    height: 100%;
    flex-direction: column;
    justify-content:space-between;
  }

  /* 设置侧边栏抬头的样式 */
  .sidebar {
    width: 200px; /* 侧边栏宽度 */
    background-color: #f6ce68; /* 侧边栏背景颜色 */
    padding: 20px; /* 侧边栏内边距 */
    margin: 0px; /* 侧边栏外边距 */
    flex-wrap: wrap;

    border-style:solid;
    border-width:1px;
    border-top-style:none;
    border-color: burlywood;
  }
  /* 设置主侧边栏的样式 */
  .content {
    width: 200px;
    padding: 15px; /* 主内容内边距 */
    margin: 0px; /* 主内容外边距 */
    background-color: #f6ce68; /* 主内容背景颜色 */

    border-style:solid;
    border-width:1px;
    border-top-style:none;
    border-color: burlywood;
  }
  .content_x {
    flex-wrap: wrap;
    width: 200px;
    padding: 20px; /* 主内容内边距 */
    margin: 0px; /* 主内容外边距 */
    background-color: #e6f0bc; /* 主内容背景颜色 */
    align-self: flex-end;
  }
</style>