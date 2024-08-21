<script setup>
import { useSystemStore } from '@/store/system'
import { watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const systemStore = useSystemStore()
watch(() => route.name, () => {
  if (route.name && route.name !== 'NotFound') {
    if (route.name === 'Login') {
      systemStore.setBoxTopTitle('嗨，近来可好👋')
    } else if (route.name === 'ForgottenPassword') {
      systemStore.setBoxTopTitle('忘记密码 😮')
    } else if (route.name === 'Register') {
      systemStore.setBoxTopTitle('嗨，近来可好 👏')
    } else if (route.name === 'ResetPassword') {
      systemStore.setBoxTopTitle('重置密码 🔒')
    } else if (route.name === 'CancelSubscription') {
      systemStore.setBoxTopTitle('取消订阅 🔕')
    } else {
      systemStore.setBoxTopTitle((import.meta.env.VITE_APP_APPNAME || '') + ' 😁')
    }
    systemStore.setShowBoxTopBool(true)
  } else {
    systemStore.setShowBoxTopBool(false)
  }
}, { immediate: true });
</script>

<template>
  <div class="home">
    <div class="login-box">
      <div class="login-top" v-if="systemStore.showBoxTopBool">
        <router-link to="/">
          <img src="/logo.svg" alt="">
          <span>{{ systemStore?.boxTopTitle || '' }}</span>
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
}

.login-box {
  max-width: calc(400px + 4rem);
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-top {
  width: 100%;
  height: 32px;
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: flex-start;

  img {
    width: 32px;
    height: 32px;
    display: block;
    object-fit: fill;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.75rem;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);

    span {
      color: #ffffff;
    }
  }
}

@media screen and (min-width: 660px) {
  .home {
    padding: 6rem 0;
  }
}
</style>
