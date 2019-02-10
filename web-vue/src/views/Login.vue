<template>
  <div class="login-wrapper">
    <img src="../assets/twitter.svg" alt="TwitterClone">
    <form @submit.prevent="onSubmit">
      <input 
        type="text"
        placeholder="Nome de usuário"
        v-model="username"
      >
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit() {
      if (!this.username.length) return
      localStorage.setItem('@TwitterCloneVue:username', this.username)
      this.$router.push('timeline')
    }
  }
}
</script>
<style scoped>
.login-wrapper {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-wrapper form {
  margin: 20px 0 0;
  width: 100%;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.login-wrapper form input {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 44px;
  padding: 0 15px;
  font-size: 14px;
}

.login-wrapper form button {
  margin: 10px 0 0;
  background: #4bb0ee;
  border-radius: 5px;
  height: 44px;
  border: 0;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
}

.login-wrapper form button:hover {
  background: #42a1db;
}

</style>


