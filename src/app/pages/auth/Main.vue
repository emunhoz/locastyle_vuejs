<template>
  <!-- <div> -->
    <Login />
  <!-- </div> -->
</template>
<script>
  import { mapGetters } from 'vuex'
  import Login from './components/Forms/Login.vue'
  export default {
    name: 'auth',
    components: { Login },
    computed: {
      ...mapGetters(['isLogged'])
    }
  }
</script>