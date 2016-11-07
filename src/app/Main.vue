<template>
  <div id="app" class="height-100">
    <RootHeader/>
    <SideBar/>
    <main class="ls-main">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import RootHeader from './layouts/components/header/main.vue'
import SideBar from './layouts/components/sidebar.vue'
export default {
  name: 'app',
  components: { RootHeader, SideBar }
}
</script>

<style>
  .height-100 {
    height: 100%;
  }
</style>
