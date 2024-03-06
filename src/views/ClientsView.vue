<template>
  <div class="pa-4 f__container_column">
    <HeaderOptions
      text-back="voltar"
      text-add="Novo Cliente"
      router-back="/"
      router-add="/new-client"
      placeholder="Digite o nome do cliente"
      @emitSearch="onSearch"
    ></HeaderOptions>
    <Table
      :columns="columns"
      :data="data"
      id="id"
      @emitDelete="doDelete"
      @emitEdit="doEdit" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Table from '../components/Table.vue'
import HeaderOptions from '../components/HeaderOptions.vue'
import { allClients, deleteClient } from '../services/clientService'
import { mapClientsToObject } from '../composables/mapperComposables'
const columns = ref([
  { label: 'código', property: 'id' },
  { label: 'Nome', property: 'name' },
  { label: 'Documento', property: 'document' },
  { label: 'Telefone', property: 'phone' },
  { label: 'E-mail', property: 'email' },
  { label: 'Ativo', property: 'active' }
])
const data = ref([])
const router = useRouter()
onMounted(async () => {
  const clients = await allClients()
  data.value = mapClientsToObject(clients)
})

const doDelete = (client) => {
  deleteClient(client.id).then(res => {
    alert('Cliente removido com sucesso')
    doFilter('id', client.id)
  }).catch(erro => {
    console.error(erro)
  })
}

const doEdit = (client) => {
  router.push({ path: `/update-client/${btoa(client.id)}` })
}
const doFilter = (key, value) => {
  data.value = data.value.filter(client => client[key] !== value)
}
const onSearch = (payload) => {
  data.value = data.value.filter(client => client.name.indexOf(payload) !== -1)
}
</script>

<style lang="scss">
.f__container_column {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
