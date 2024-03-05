<template>
  <div class="pa-4 f__container_column">
    <HeaderOptions
      text-back="voltar"
      text-add="Novo carrinho"
      router-back="/"
      router-add="/new-cart"
      placeholder="Digite o nome do cliente"
      @emitSearch="onSearch"
    ></HeaderOptions>
    <Table :columns="columns" :data="data" id="nome"></Table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderOptions from '../components/HeaderOptions.vue'
import Table from '../components/Table.vue'
const filter = ref('')
const columns = ref([
  { label: 'Nome', property: 'nome' },
  { label: 'Idade', property: 'idade' },
  { label: 'País', property: 'pais' }
])
const data = [
  { nome: 'João', idade: 25, pais: 'Brasil' },
  { nome: 'Maria', idade: 30, pais: 'EUA' },
  { nome: 'Pedro', idade: 28, pais: 'França' }
]
const onSearch = (payload) => {
  filter.value = payload
}
</script>

<style lang="scss">
.f__container_column {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
