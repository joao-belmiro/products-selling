import { mount } from '@vue/test-utils'
import FormProduct from '@/views/FormProduct.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/products', name: 'products', component: FormProduct },
    { path: '/new-product', name: 'new-product', component: FormProduct }
  ]
})
describe('FormProduct', () => {
  it('verficar a renderização do componente', () => {
    const wrapper = mount(FormProduct, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('teste para verificar se os inputs recebem o valor correto ', async () => {
    const wrapper = mount(FormProduct, {
      global: {
        plugins: [router]
      },
      
    })
    await wrapper.find('#product-name').setValue('Arroz')
    await wrapper.find('#product-active').setValue(true)

    expect(wrapper.vm.name).toBe('Arroz')
    expect(wrapper.vm.active).toBe(true)
  })

})
