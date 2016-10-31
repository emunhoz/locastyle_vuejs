<template>
  <header class="ls-topbar">
    <userAccount />
    <span class="ls-show-sidebar ls-ico-menu"></span>
    <h1 class="ls-brand-name">
      <router-link to="/" class="ls-ico-earth">
        <small>Descrição</small>
        Produto
      </router-link>
    </h1>
  </header>
</template>
<script>
import userAccount from './userAccount'
export default {
  name: 'header',
  components: { userAccount }
}
</script>