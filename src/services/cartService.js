import crudAbstractService from './crudAbstractService'
const collectionName = 'carts'
const getCart = (client, products) => {
  return {
    client: client,
    products: products
  }
}
export const createCart = async (client, products) => {
  const cart = getCart(client, products)
  console.log(cart)
  return crudAbstractService.create(cart, collectionName)
}
export const updateCart = (id, client, products) => {
  const cart = getCart(client, products)
  return crudAbstractService.update(cart, collectionName, id)
}
export const findCartById = (id) => {
  return crudAbstractService.getById(id, collectionName)
}
export const allCarts = () => {
  return crudAbstractService.getAll(collectionName)
}
export const deleteCart = (id) => {
  return crudAbstractService.delete(id, collectionName)
}
