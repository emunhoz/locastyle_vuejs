<template>
  <aside class="ls-sidebar">
    <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
      <a href="#" onclick="return false" class="ls-ico-user">
      <span class="ls-name">João Kennedy</span>
      (johnkennedy)
      </a>
      <nav class="ls-dropdown-nav ls-user-menu" aria-hidden="true">
        <userMenu />
      </nav>
    </div>
    <div class="ls-sidebar-inner">
      <nav class="ls-menu" role="navigation">
        <ul role="menu">
          <li><router-link to="/"     class="ls-ico-home" title="Início" role="menuitem">Início</router-link></li>
          <li><router-link to="/auth" class="ls-ico-user" title="Entrar" role="menuitem">Entrar</router-link></li>
        </ul>
      </nav>
    </div>
    <span class="ls-sidebar-toggle ls-ico-shaft-left" @click="toggleSideBar"></span>
  </aside>
</template>
<script>
import userMenu from './header/userMenu'
export default {
  name: 'user-account',
  components: { userMenu },
  data () {
    return { isOpen: false }
  },
  methods: {
    toggleSideBar () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>