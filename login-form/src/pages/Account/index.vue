<template>
  <div class="flex flex-col justify-center items-center">
    <p>我是Account管理页面</p>
    <!-- google 登录信息 展示 -->
    <div class="flex flex-col justify-center items-center">
      <!-- 头像 -->
      <img :src="userInfo.picture" alt="" class="avatar"></img>
      <!-- 昵称 -->
      <div class="title">{{ userInfo.name }}</div>
      <div class="desc">{{ userInfo.email }}</div>
    </div>
    <router-link to="/" class="back-home">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
let _userInfo = localStorage.getItem('_userData')
const userInfo = _userInfo ? JSON.parse(_userInfo) : {}
</script>

<style lang="scss" scoped>
.avatar {
  width: 100px;
  height: 100%;
  border-radius: 50%;
  margin-top: 20px;
}

.title {
  color: #a1a1aa;
  font-size: 16px;
  margin-top: 8px;
  font-weight: 500;
  line-height: 1.5;
}

.desc {
  color: #9ba1ab;
  font-size: 12px;
  margin-top: 8px;
  line-height: 16px;
}

.back-home {
  color: #ffffff;
  font-size: 12px;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  background-color: #5845ee;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3f2eae;
  }
}
</style>
