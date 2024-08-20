<script setup>
</script>

<template>
  <div class="home">
    <div class="login-box">
      <div class="login-top" v-if="$route.name !== 'NotFound'">
        <router-link to="/">
          <img src="/logo.svg" alt="">
          <span>cnSaaS.top</span>
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
  margin-bottom: 1.5rem;
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
