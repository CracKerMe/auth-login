<template>
  <div class="page-not-found">
    <img class="" :src="img404" alt="">
    <div>
      <p><span>哎呀😅</span> 有什么丢失了!</p>
      <p>您访问的页面不存在了.</p>
    </div>
    <router-link to="/">
      <span>返回首页</span>
    </router-link>
  </div>
</template>

<script setup>
import img404 from '@/assets/404.webp';
</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  height: calc(100vh - 14rem);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.5rem;
  color: #fafafa;
  text-align: center;

  img {
    width: 208px;
    height: 80px;
    display: block;
    object-fit: fill;
    margin-bottom: 1rem;
  }

  p {
    &:first-child {
      font-size: 1.375rem;
      line-height: 1.875rem;
      margin-bottom: 0.5rem;

      span {
        color: #5845ee;
      }
    }

    &:last-child {
      color: #a1a1aa;
      overflow-wrap: break-word;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 400;
    }
  }

  span {
    font-weight: bold;
  }

  >a {
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
}
</style>
