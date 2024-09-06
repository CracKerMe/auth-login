<script setup>
import { useSystemStore } from '@/store/system'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import TerminalIcon from '@/assets/terminal.svg'

const route = useRoute()
const systemStore = useSystemStore()
const isDev = ref(import.meta.env.MODE === 'dev')

watch(() => route.name, () => {
  if (route.name && route.name !== 'NotFound') {
    if (route.name === 'Login') {
      systemStore.setBoxTopTitle('嗨，近来可好👋')
    } else if (route.name === 'ForgottenPassword') {
      systemStore.setBoxTopTitle('忘记密码 😮')
    } else if (route.name === 'Register') {
      systemStore.setBoxTopTitle('即刻加入我们 👏')
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
}, { immediate: true })

console.log(
  "%c 誓约. %c PromiseX.",
  "color: #155f3e; background: #85E89D; padding: 5px;border-radius:8px 0 0 8px;font-weight: bold;",
  "color: #85E89D; background: #155f3e; padding: 5px;border-radius:0 8px 8px 0;font-weight: bold;"
);
</script>

<template>
  <div class="layout">
    <div class="login-box">
      <div class="login-top" v-if="systemStore.showBoxTopBool">
        <router-link to="/">
          <img src="/logo.svg" alt="">
        </router-link>
        <span>{{ systemStore?.boxTopTitle || '' }}</span>
      </div>
      <router-view />
      <footer>
        <div class="current-env" v-if="isDev">
          <img :src="TerminalIcon" alt="">
          开发环境
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
}

.login-box {
  height: 100%;
  max-width: calc(400px + 8rem);
  padding: 0 2rem;
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
  align-items: center;
  gap: 0.5rem;

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
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.75rem;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
    color: #ffffff;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  pointer-events: none;
}

.current-env {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fec84b;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 500;
  color: #93370d;
  border: 1px solid #fdb022;
  border-radius: 0.375rem;
  height: 22px;

  img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }
}
</style>
