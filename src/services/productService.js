import crudAbstractService from './crudAbstractService'
const collectionName = 'products'
const getProduct = (name, active) => {
  return {
    name: name,
    active: active
  }
}
export const createProduct = async (name, active) => {
  const product = getProduct(name, active)
  return crudAbstractService.create(product, collectionName)
}
export const updateProduct = (id, name, active) => {
  const product = getProduct(name, active)
  return crudAbstractService.update(product, collectionName, id)
}
export const findProductById = (id) => {
  return crudAbstractService.getById(id, collectionName)
}
export const allProducts = () => {
  return crudAbstractService.getAll(collectionName)
}
export const deleteProduct = (id) => {
  return crudAbstractService.delete(id, collectionName)
}
