import { mapClientsToObject, mapProductsToObject } from '@/composables/mapperComposables'

describe('Testes das funções do composables', () => {
  let mockClients = []
  let mockProducts = []

  beforeEach(() => {
    mockClients = [
      { id: 1, data: () => ({ name: 'Cliente 1', email: 'email@email.com' }) },
      { id: 2, data: () => ({ name: 'Cliente 2', email: 'email1@email.com' }) }
    ]

    mockProducts = [
      { id: 1, data: () => ({ name: 'Produto 1', price: 10 }) },
      { id: 2, data: () => ({ name: 'Produto 2', price: 20 }) }
    ]
  })

  test('Teste do método mapClientsToObject', () => {
    const result = mapClientsToObject(mockClients)

    expect(result.length).toBe(2)
    expect(result[0].id).toBe(1)
    expect(result[0].name).toBe('Cliente 1')
    expect(result[0].email).toBe('email@email.com')
    expect(result[1].id).toBe(2)
    expect(result[1].name).toBe('Cliente 2')
    expect(result[1].email).toBe('email1@email.com')
  })

  test('Teste do método mapProductsToObject', () => {
    const result = mapProductsToObject(mockProducts)

    expect(result.length).toBe(2)
    expect(result[0].id).toBe(1)
    expect(result[0].name).toBe('Produto 1')
    expect(result[0].price).toBe(10)
    expect(result[1].id).toBe(2)
    expect(result[1].name).toBe('Produto 2')
    expect(result[1].price).toBe(20)
  })
})
