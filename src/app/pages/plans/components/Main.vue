<template>
  <div>
    <h1 class="ls-title-intro ls-ico-stats">Planos</h1>
      <div class="ls-box-filter">
        <form action="" class="ls-form ls-form-inline ls-float-left">
          <label class="ls-label col-md-8 col-sm-8">
            <b class="ls-label-text">Status</b>
            <div class="ls-custom-select">
              <select name="" class="ls-select">
                <option>Todos</option>
                <option>Ativo</option>
                <option>Inativo</option>
              </select>
            </div>
          </label>
        </form>

        <form  action="" class="ls-form ls-form-inline ls-float-right">
          <label class="ls-label" role="search">
            <b class="ls-label-text ls-hidden-accessible">Nome do plano</b>
            <input type="text" id="q" name="q" aria-label="Faça sua busca por plano" placeholder="Nome do plano" required="" class="ls-field">
          </label>
          <div class="ls-actions-btn">
            <input type="submit" value="Buscar" class="ls-btn" title="Buscar">
          </div>
        </form>
      </div>

  </div>
</template>
