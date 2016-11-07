<template>
  <header class="ls-topbar">
    <userAccount />
    <span class="ls-show-sidebar ls-ico-menu"></span>
    <h1 class="ls-brand-name">
      <router-link to="/">
        <!-- <small>Descrição</small> -->
        <img src="https://images.tcdn.com.br/static_inst/site/tray-cdn/uploads/2014/06/logo-tray-commerce.svg" height="40">
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