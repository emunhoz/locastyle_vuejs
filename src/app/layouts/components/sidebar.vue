<template>
  <aside class="ls-sidebar">
    <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
      <a href="#" class="ls-ico-user">
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
          <li><router-link to="/plans" class="ls-ico-stats" title="Planos" role="menuitem">Planos</router-link></li>
        </ul>
      </nav>
    </div>
    <span class="ls-sidebar-toggle ls-ico-shaft-left"></span>
  </aside>
</template>
<script>
import userMenu from './header/userMenu'
export default {
  name: 'user-account',
  components: { userMenu }
}
</script>