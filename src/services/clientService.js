import crudAbstractService from './crudAbstractService'
const collectionName = 'clients'
const getClient = (name, doc, phone, email, active) => {
  return {
    name: name,
    document: doc,
    phone: phone,
    email: email,
    active: active
  }
}
export const createClient = async (name, doc, phone, email, active) => {
  const client = getClient(name, doc, phone, email, active)
  return crudAbstractService.create(client, collectionName)
}
export const updateClient = (id, name, doc, phone, email, active) => {
  const client = getClient(name, doc, phone, email, active)
  return crudAbstractService.update(client, collectionName, id)
}
export const findClientById = (id) => {
  return crudAbstractService.getById(id, collectionName)
}
export const allClients = () => {
  return crudAbstractService.getAll(collectionName)
}
export const deleteClient = (id) => {
  return crudAbstractService.delete(id, collectionName)
}
