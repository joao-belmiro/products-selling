import db from './initializeFirebase'
import { addDoc, deleteDoc, collection, doc, updateDoc, getDoc, getDocs } from 'firebase/firestore'
export default {
  create: async (document, collectionName) => {
    const objectCollection = collection(db, collectionName)
    const response = await addDoc(objectCollection, document)
    return response
  },
  update: async (document, collectionName, id) => {
    const objectDoc = doc(db, collectionName, id)
    const response = await updateDoc(objectDoc, document)
    return response
  },
  getById: async (id, collectionName) => {
    const objectDoc = doc(db, collectionName, id)
    const objectReturn = await getDoc(objectDoc)
    if (objectReturn.exists()) {
      return objectReturn
    }
    return null
  },
  getAll: async (collectionName) => {
    const allData = await getDocs(collection(db, collectionName))
    return allData
  },
  delete: async (id, collectionName) => {
    const objectDoc = doc(db, collectionName, id)
    const response = await deleteDoc(objectDoc)
    return response
  }
}
