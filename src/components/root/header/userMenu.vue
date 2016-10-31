<template>
  <ul>
    <li><a href="#" role="option">Meus dados</a></li>
    <li><a href="#" role="option">Planos</a></li>
    <li><a href="#" role="option" @click="login">Sair</a></li>
  </ul>
</template>
<script>
export default {
  methods: {
    login: function () {
      this.isLoggedIn = !this.isLoggedIn
    }
  }
}
</script>