<template>
  <div class="ls-notification-topbar">
    <div data-ls-module="dropdown" class="ls-dropdown ls-user-account" @click="toggleMenu" :class="{ 'ls-active': isOpen }">
      <a href="#" class="ls-ico-user">
      <span class="ls-name">João Kennedy</span>
      (johnkennedy)
      </a>
      <nav class="ls-dropdown-nav ls-user-menu" aria-hidden="true">
        <userMenu />
      </nav>
    </div>
  </div>
</template>
<script>
import userMenu from './userMenu'
export default {
  name: 'user-account',
  components: { userMenu },
  data () {
    return { isOpen: false }
  },
  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>