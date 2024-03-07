import { mount } from '@vue/test-utils'
import HeaderOptions from '@/components/HeaderOptions.vue'
import Table from '@/components/Table.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('Teste das funcionalidades e props para HeaderOptions', () => {
  it('Verificar se as props e rotas estão sendo passadas corretamente', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/clients', name: 'clients' },
        { path: '/new-client', name: 'new-client' }
      ]
    })

    const routerBack = '/clients'
    const routerAdd = '/new-client'
    const textBack = 'voltar'
    const textAdd = 'adicionar'
    const placeholder = 'Pesquisar'

    const wrapper = mount(HeaderOptions, {
      global: {
        plugins: [router]
      },
      stubs: ['router-link'],
      props: {
        routerBack,
        routerAdd,
        textBack,
        textAdd,
        placeholder
      }
    })

    const routerLinkBack = wrapper.find('.link--back').element
    const routerLinkAdd = wrapper.find('.link--new').element
    expect(routerLinkBack.getAttribute('href')).toBe(routerBack)
    expect(routerLinkBack.textContent).toBe(textBack)
    expect(routerLinkAdd.getAttribute('href')).toBe(routerAdd)
    expect(routerLinkAdd.textContent).toBe(textAdd)
  })

  it('Setar o atributo no placeholder do input ', () => {
    const placeholder = 'Pesquisar'
    const wrapper = mount(HeaderOptions, {
      props: {
        placeholder
      }
    })

    const inputSearch = wrapper.find('.input_search')
    expect(inputSearch.attributes('placeholder')).toBe(placeholder)
  })
})
describe('Testes do componente Table', () => {
  const columns = [
    { label: 'Nome', property: 'nome' },
    { label: 'Idade', property: 'idade' }
  ]

  const data = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 30 }
  ]

  const id = 'id'

  it('verficar se a tabela está sendo montada de forma correta', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data,
        id
      }
    })

    const header = wrapper.findAll('thead th')
    expect(header.length).toBe(columns.length + 1)

    columns.forEach((col, index) => {
      expect(header[index].text()).toBe(col.label)
    })

    const dataBody = wrapper.findAll('tbody td')
    expect(dataBody.length).toBe(data.length * (columns.length + 1))

    data.forEach((row, rowIndex) => {
      columns.forEach((col, colIndex) => {
        const expectedData = row[col.property].toString()
        const dataIndex = rowIndex * (columns.length + 1) + colIndex
        expect(dataBody[dataIndex].text()).toBe(expectedData)
      })
    })
  })

  it('verificar a emissão dos eventos', async () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data,
        id
      }
    })

    const btnEdit = wrapper.find('.t-btn-edit')
    const btnDelete = wrapper.find('.t-btn-trash')

    await btnEdit.trigger('click')
    await btnDelete.trigger('click')
    
    expect(wrapper.emitted('emitEdit')).toBeTruthy()
    expect(wrapper.emitted('emitDelete')).toBeTruthy()
  })
})
