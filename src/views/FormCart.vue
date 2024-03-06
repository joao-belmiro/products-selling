<template>
  <section class="pa-4">
    <card>
      <span class="title-card">Cadastro de carrinho</span>
      <hr />
      <br />
      <Form
        textCancel="Cancelar"
        textSubmit="Salvar"
        routeBack="/carts"
        class="form-container"
        @onSubmit="saveOrUpadate"
      >
        <div class="i-fields">
          <div class="input-group">
            <label> Cliente </label>
            <div class="input-field">
              <select v-model="client" required>
                <option v-for="client in allClientsList" :key="client.id" :value="client">{{ client.name }}</option>
              </select>
            </div>
          </div>
          <div class="input-group">
            <label>Produtos</label>
            <div class="input-field">
              <select v-model="productSelected" @change="updateSelect">
                <option v-for="product in allProductsList" :key="product.id" :value="product"> {{ product.name }}</option>
              </select>
            </div>
          </div>
          <card class="flex products-container">
            <div class="product" v-for="product in productsCart" :key="product">
              <span>{{ product.name }}</span>
              <button class="btn-remove" @click="removeProduct(product)">&#10006;</button>
            </div>
          </card>
        </div>
      </Form>
    </card>
  </section>
</template>

<script setup>
import Card from '@/components/Card.vue'
import Form from '@/components/Form.vue'
import { allClients } from '../services/clientService'
import { allProducts } from '../services/productService'
import { findCartById, createCart, updateCart } from '../services/cartService'
import { mapClientsToObject, mapProductsToObject } from '../composables/mapperComposables'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
const route = useRouter()
const id = ref(null)
const client = ref(null)
const productSelected = ref('')
const productsCart = ref([])
const allProductsList = ref([])
const allClientsList = ref([])

onMounted(async () => {
  const getAllProducts = await allProducts()
  allProductsList.value = mapProductsToObject(getAllProducts)
  const getAllClients = await allClients()
  allClientsList.value = mapClientsToObject(getAllClients)

  if (route.currentRoute.value.name === 'update-cart') {
    const cartId = atob(route.currentRoute.value.params.id)
    const cart = await findCartById(cartId)
    mapCartFields(cart)
  }
})

const saveOrUpadate = () => {
  if (route.currentRoute.value.name === 'update-cart') {
    updateCart(id.value, client.value, productsCart.value).then((res) => {
      alert('Carrinho atualizado com sucesso')
      route.push('/carts')
    }).catch((res) => {
      alert('erro ao atualizar carrinho')
    })
  } else {
    createCart(client.value, productsCart.value).then((res) => {
      alert('Carrinho cadastrado com sucesso')
      route.push('/carts')
    }).catch((res) => {
      console.log(res)
      alert('erro ao criar carrinho')
    })
  }
}

const updateSelect = () => {
  productsCart.value.push(productSelected.value)
  productSelected.value = null
}

const removeProduct = (productRemove) => {
  productsCart.value = productsCart.value.filter((p) => p !== productRemove)
}

const mapCartFields = (cart) => {
  id.value = cart.id
  client.value = cart.data().client
  productsCart.value = cart.data().products
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
.products-container {
  width: 100%;
  display: flex;
  background: $grey-2;
  min-height: 32px;

  .product {
    border: 2px solid $primary;
    border-radius: 8px;
    padding: 4px 8px;
  }
  .btn-remove {
    width: 24px;
    height: 24px;
    color: $background;
    background: $primary;
    border: none;
    border-radius: 50%;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
