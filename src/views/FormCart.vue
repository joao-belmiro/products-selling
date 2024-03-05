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
              <select v-model="client">
                <option value="opcao1">cliente 1</option>
                <option value="opcao2">cliente 2</option>
                <option value="opcao3">cliente 3</option>
              </select>
            </div>
          </div>
          <div class="input-group">
            <label>Produtos</label>
            <div class="input-field">
              <select v-model="productSelected" @change="updateSelect">
                <option value="opcao1">produto 1</option>
                <option value="opcao2">produto 2</option>
                <option value="opcao3">produto 3</option>
              </select>
            </div>
          </div>
          <card class="flex products-container">
            <div class="product" v-for="product in products" :key="product">
              <span>{{ product }}</span>
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
import { ref } from 'vue'
const client = ref(null)
const productSelected = ref('')
const products = ref([])
const saveOrUpadate = () => {}

const updateSelect = (event) => {
  products.value.push(productSelected.value)
  productSelected.value = null
}

const removeProduct = (productRemove) => {
  products.value = products.value.filter((p) => p !== productRemove)
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
