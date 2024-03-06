<template>
  <div class="pa-4">
    <card>
      <span class="title-card">{{ route.currentRoute.value.name == 'new-client'? 'Cadastrar': 'Editar' }} cliente</span>
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
import { createClient, findClientById, updateClient } from '../services/clientService'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
const id = ref(null)
const name = ref('')
const document = ref('')
const phone = ref('')
const email = ref('')
const active = ref(true)
const route = useRouter()

onMounted(async () => {
  if (route.currentRoute.value.name === 'update-client') {
    const clientId = atob(route.currentRoute.value.params.id)
    const client = await findClientById(clientId)
    mapClientFields(client)
  }
})

const saveOrUpadate = () => {
  if (route.currentRoute.value.name === 'update-client') {
    updateClient(id.value, name.value, document.value, phone.value, email.value, active.value).then((res) => {
      alert('Cliente atualizado com sucesso')
      route.push('/clients')
    }).catch((res) => {
      alert('erro ao atualizar Cliente')
    })
  } else {
    createClient(name.value, document.value, phone.value, email.value, active.value).then((res) => {
      alert('Cliente cadastrado com sucesso')
      route.push('/clients')
    }).catch((res) => {
      alert('erro ao criar Cliente')
    })
  }
}

const mapClientFields = (client) => {
  id.value = client.id
  name.value = client.data().name
  document.value = client.data().document
  phone.value = client.data().phone
  email.value = client.data().email
  active.value = client.data().active
}

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
