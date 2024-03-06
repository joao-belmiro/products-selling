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
import HeaderOptions from '../components/HeaderOptions.vue'
import { allCarts, deleteCart } from '../services/cartService'
import { useRouter } from 'vue-router'
import Table from '../components/Table.vue'
const filter = ref('')
const columns = ref([
  { label: 'Código', property: 'id' },
  { label: 'Cliente', property: 'client' },
  { label: 'Produtos', property: 'products' }
])
const data = ref([])
const router = useRouter()
onMounted(async () => {
  const allCartsList = await allCarts()
  mapCarts(allCartsList)
})

const onSearch = (payload) => {
  filter.value = payload
}
const mapCarts = (allCarts) => {
  allCarts.forEach(cart => {
    data.value.push({ id: cart.id, client: cart.data().client.name, products: extractProductNames(cart.data().products) })
  })
}

const extractProductNames = (products) => {
  return products.map(product => product.name).join(', ')
}
const doDelete = (cart) => {
  deleteCart(cart.id).then(res => {
    alert('carte removido com sucesso')
    doFilter('id', cart.id)
  }).catch(erro => {
    console.error(erro)
  })
}

const doEdit = (cart) => {
  router.push({ path: `/update-cart/${btoa(cart.id)}` })
}

const doFilter = (key, value) => {
  data.value = data.value.filter(client => client[key] !== value)
}
</script>

<style lang="scss">
.f__container_column {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
