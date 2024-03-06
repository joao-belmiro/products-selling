
const mapClientsToObject = (clients) => {
  const data = []
  clients.forEach(client => {
    data.push({ id: client.id, ...client.data() })
  })
  return data
}
const mapProductsToObject = (products) => {
  const data = []
  products.forEach(product => {
    data.push({ id: product.id, ...product.data() })
  })

  return data
}

export { mapClientsToObject, mapProductsToObject }
