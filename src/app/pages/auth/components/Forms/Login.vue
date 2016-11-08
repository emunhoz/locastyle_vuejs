<template>
  <div class="ls-login-parent">
    <div class="ls-login-inner">
      <div class="ls-login-container">
        <div class="ls-login-box">
          <h1 class="ls-login-logo"><img title="Logo login" src="http://opensource.locaweb.com.br/locawebstyle/assets/images/locastyle/logo-locaweb.jpg"></h1>
          <form role="form" class="ls-form ls-login-form">
            <fieldset>

              <label class="ls-label">
                <b class="ls-label-text ls-hidden-accessible">Usuário</b>
                <input v-model="user.email" class="ls-login-bg-user ls-field-lg" type="text" placeholder="Usuário" required="" autofocus="">
              </label>

              <label class="ls-label">
                <b class="ls-label-text ls-hidden-accessible">Senha</b>
                <div class="ls-prefix-group">
                  <input v-model="user.password" id="password_field" class="ls-login-bg-password ls-field-lg" type="password" placeholder="Senha" required="">
                  <a class="ls-label-text-prefix ls-toggle-pass ls-ico-eye" data-toggle-class="ls-ico-eye, ls-ico-eye-blocked" data-target="#password_field" href="#"></a>
                </div>
              </label>

              <p><a class="ls-login-forgot" href="forgot-password">Esqueci minha senha</a></p>

              <button type="submit" @click="doLogin" class="ls-btn-primary ls-btn-block ls-btn-lg">Entrar</button>
              <p class="ls-txt-center ls-login-signup">Não possui um usuário na Locaweb? <a href="#">Cadastre-se agora</a></p>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      doLogin () {
        // this.$router.push('/home')
        const user = this.user
        this.$store.dispatch('attemptLogin', {...user})
      }
    }
  }
</script>