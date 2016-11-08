<template>
  <div>
    <h1 class="ls-title-intro ls-ico-home">Página inicial</h1>
    <p>Um boilerplate utilizando <strong>Locastyle</strong> e <a href="https://vuejs.org/"> Vue.js!</a></p>
    <button data-ls-module="modal" data-target="#myAwesomeModal" class="ls-btn-primary">Ative a modal</button>

    <Modal/>
  </div>
</template>
<script>
  import Modal from '../../components/shareds/Modal.vue'
  import http from './../../../http'
  export default {
    components: { Modal },
    mounted () {
      http.post('http://localhost:3000/posts', {
        data: {
          title: 'edermunhoz',
          body: 'bar',
          userId: 666
        }
      })
        .then(response => response.data)
        .then(data => {
          console.log(data)
        })
    }
  }
</script>