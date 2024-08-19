<script setup>
import Form from '@/components/Form.vue'
</script>

<template>
  <div class="home">
    <div class="login-box">
      <div class="login-top">
        <a href="https://cnsaas.top" target="_blank" rel="noopener noreferrer">
          <img src="/logo.svg" alt="">
          <span>cnSaaS.top</span>
        </a>
      </div>
      <Form />
      <p class="forget-tips">Did you forget your password?<a href="#" target="_blank" rel="noopener noreferrer">Reset it now</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #f0f0f0;
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
  text-align: center;
  margin-bottom: 2.5rem;

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
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
    color: #1a202c;

    span {
      color: #1a202c;
    }
  }
}

.forget-tips {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #566072;

  a {
    color: #5845ee;
    margin-left: 0.25rem;
  }
}

@media screen and (min-width: 660px) {
  .home {
    padding: 6rem 0;
  }
}
</style>
