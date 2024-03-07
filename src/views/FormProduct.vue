<template>
  <div class="pa-4">
    <card>
      <span class="title-card">Cadastro de Produto</span>
      <hr />
      <br />
      <Form
        textCancel="Cancelar"
        textSubmit="Salvar"
        routeBack="/products"
        class="form-container"
        @onSubmit="saveOrUpadate"
      >
        <div class="i-fields">
          <div class="input-group">
            <label> Nome </label>
            <div class="input-field">
              <input id="product-name" v-model="name" type="text" required />
            </div>
          </div>
          <div class="input-group">
            <label> {{ active ? 'Ativo' : 'Inativo' }} </label>
            <input id="product-active" v-model="active" type="checkbox" />
          </div>
        </div>
      </Form>
    </card>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import Form from '@/components/Form.vue'
import { createProduct, updateProduct, findProductById } from '../services/productService'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const id = ref(null)
const name = ref('')
const active = ref(true)
const route = useRouter()

onMounted(async () => {
  if (route.currentRoute.value.name === 'update-product') {
    const productId = atob(route.currentRoute.value.params.id)
    const client = await findProductById(productId)
    mapProductFields(client)
  }
})

const saveOrUpadate = () => {
  if (route.currentRoute.value.name === 'update-product') {
    updateProduct(id.value, name.value, active.value).then((res) => {
      alert('Produto atualizado com sucesso')
      route.push('/products')
    }).catch((res) => {
      alert('erro ao atualizar Produto')
    })
  } else {
    createProduct(name.value, active.value).then((res) => {
      alert('Produto cadastrado com sucesso')
      route.push('/products')
    }).catch((res) => {
      alert('erro ao criar Produto')
    })
  }
}

const mapProductFields = (product) => {
  id.value = product.id
  name.value = product.data().name
  active.value = product.data().active
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
