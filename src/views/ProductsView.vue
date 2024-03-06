<template>
  <div class="pa-4 f__container_column">
    <HeaderOptions
      text-back="voltar"
      text-add="Novo Produto"
      router-back="/"
      router-add="/new-product"
      placeholder="Digite o nome do Produto"
      @emitSearch="onSearch"
    ></HeaderOptions>
    <Table
      :columns="columns"
      :data="data"
      id="id"
      @emitDelete="doDelete"
      @emitEdit="doEdit"></Table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { allProducts, deleteProduct } from '../services/productService'
import HeaderOptions from '../components/HeaderOptions.vue'
import Table from '../components/Table.vue'
const filter = ref('')
const router = useRouter()
const columns = ref([
  { label: 'Código', property: 'id' },
  { label: 'Nome', property: 'name' },
  { label: 'Ativo', property: 'active' }
])
const data = ref([])

onMounted(async () => {
  const products = await allProducts()
  mapProductsToObject(products)
})

const mapProductsToObject = (products) => {
  products.forEach(product => {
    data.value.push({ id: product.id, ...product.data() })
  })
}

const doDelete = (product) => {
  deleteProduct(product.id).then(res => {
    alert('Produto removido com sucesso')
    doFilter('id', product.id)
  }).catch(erro => {
    console.error(erro)
  })
}

const doEdit = (product) => {
  router.push({ path: `/update-product/${btoa(product.id)}` })
}
const doFilter = (key, value) => {
  data.value = data.value.filter(product => product[key] !== value)
}
const onSearch = (payload) => {
  data.value = data.value.filter(product => product.name.indexOf(payload) !== -1)
}
</script>

<style lang="scss">
.f__container_column {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
