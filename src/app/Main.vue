<template>
  <div id="app">
    <div v-if="isLoggedIn">
      <RootHeader></RootHeader>
      <SideBar></SideBar>
      <main class="ls-main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <div v-else>
      <div class="ls-login-parent">
        <div class="ls-login-inner">
          <div class="ls-login-container">
            <div class="ls-login-box">
              <h1 class="ls-login-logo"><img title="Logo login" src="http://opensource.locaweb.com.br/locawebstyle/assets/images/locastyle/logo-locaweb.jpg"></h1>
              <div role="form" class="ls-form ls-login-form">
                <fieldset>
                  <label class="ls-label">
                  <b class="ls-label-text ls-hidden-accessible">Usuário</b>
                  <input class="ls-login-bg-user ls-field-lg" type="text" placeholder="Usuário" required="" autofocus="">
                  </label>
                  <label class="ls-label">
                    <b class="ls-label-text ls-hidden-accessible">Senha</b>
                    <div class="ls-prefix-group">
                      <input id="password_field" class="ls-login-bg-password ls-field-lg" type="password" placeholder="Senha" required="">
                      <a class="ls-label-text-prefix ls-toggle-pass ls-ico-eye" data-toggle-class="ls-ico-eye, ls-ico-eye-blocked" data-target="#password_field" href="#"></a>
                    </div>
                  </label>
                  <p><a class="ls-login-forgot" href="forgot-password">Esqueci minha senha</a></p>
                  <button @click="login" type="submit" class="ls-btn-primary ls-btn-block ls-btn-lg">Entrar</button>
                  <p class="ls-txt-center ls-login-signup">Não possui um usuário na Locaweb? <a href="#">Cadastre-se agora</a></p>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RootHeader from '../components/root/header/main.vue'
import SideBar from '../components/root/sidebar.vue'
export default {
  name: 'app',
  components: { RootHeader, SideBar },
  data () {
    return { isLoggedIn: false }
  },
  methods: {
    login: function () {
      this.isLoggedIn = !this.isLoggedIn
    }
  }
}
</script>

<style>

</style>
