<template>
  <div>
    <h1 class="ls-title-intro ls-ico-users">[Auth]</h1>
    <p>Rota de Autenticação!</p>
    <hr>
    <button data-ls-module="modal" data-target="#myAwesomeModal" class="ls-btn-primary">Ative a modal</button>
    <Modal/>

  </div>
</template>
<script>
  import Modal from '../../../components/shareds/Modal.vue'
  export default {
    components: { Modal },
    mounted () {
      window.locastyle.modal.init()
    }
  }
</script>