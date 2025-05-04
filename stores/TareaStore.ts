import { defineStore } from 'pinia'
import { getDB } from '~/firebase/fireinit'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'

const db = getDB()

export const useTareaStore = defineStore('tarea', {
  state: () => ({
    tareas: [] as { id: string; nombre: string; completada: boolean }[],
  }),

  actions: {
    async cargarTareas() {
      const tareasSnapshot = await getDocs(collection(db, 'tareas'))
      this.tareas = tareasSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as { id: string; nombre: string; completada: boolean }[]
    },

    async agregarTarea(nuevaTarea: string) {
      if (nuevaTarea.trim() !== '') {
        const docRef = await addDoc(collection(db, 'tareas'), {
          nombre: nuevaTarea,
          completada: false,
        })
        this.tareas.push({ id: docRef.id, nombre: nuevaTarea, completada: false })
      }
    },

    async eliminarTarea(id: string) {
      await deleteDoc(doc(db, 'tareas', id))
      this.tareas = this.tareas.filter(tarea => tarea.id !== id)
    },

    async marcarTarea(id: string) {
      const tarea = this.tareas.find(t => t.id === id)
      if (tarea) {
        const nuevaCompletada = !tarea.completada
        await updateDoc(doc(db, 'tareas', id), { completada: nuevaCompletada })
        tarea.completada = nuevaCompletada
      }
    },
  },
})