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
import RootHeader from '../components/root/header/main.vue'
import SideBar from '../components/root/sidebar.vue'
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
