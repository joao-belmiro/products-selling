<template>
  <div class="pa-4">
    <card>
      <span class="title-card">Cadastro de clientes</span>
      <hr />
      <br />
      <Form
        textCancel="Cancelar"
        textSubmit="Salvar"
        routeBack="/clients"
        class="form-container"
        @onSubmit="saveOrUpadate"
      >
        <div class="i-fields">
          <div class="input-group">
            <label> Nome </label>
            <div class="input-field">
              <input v-model="name" type="text" required />
            </div>
          </div>
          <div class="input-group">
            <label>Documento</label>
            <div class="input-field">
              <input v-model="document" type="text" required />
            </div>
          </div>
          <div class="input-group">
            <label>Telefone</label>
            <div class="input-field">
              <input v-model="phone" type="text" required />
            </div>
          </div>
          <div class="input-group">
            <label> E-mail </label>
            <div class="input-field">
              <input v-model="email" type="text" required />
            </div>
          </div>
          <div class="input-group">
            <label> {{ active ? 'Ativo' : 'Inativo' }} </label>
            <input v-model="active" type="checkbox" required />
          </div>
        </div>
      </Form>
    </card>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import Form from '@/components/Form.vue'
import { ref } from 'vue'
const name = ref('')
const document = ref('')
const phone = ref('')
const email = ref('')
const active = ref(true)
const saveOrUpadate = () => {}
</script>

<style lang="scss">
h3 {
  text-align: left;
  margin: 32px 0;

  a {
    color: $primary;
    text-decoration: none;
    &:hover {
      color: $secondary;
    }
  }
}
</style>
