import {create} from 'zustand'
import { DraftPatient, Patients } from '../types'
import {v4 as uuidv4} from 'uuid'
import { devtools, persist} from 'zustand/middleware'


type PatientState = {
    patients : Patients[]
    activeId: Patients['id']
    addPatient: (data: DraftPatient) => void
    deletePatiente: (id: Patients['id']) => void
    getPatienteById: (id:Patients['id']) => void
    uppdatePatient: (data: DraftPatient) => void
}

const createPatiente = (patient : DraftPatient) : Patients => {
    return {...patient, id: uuidv4()}
}





export const usePatienteStore = create<PatientState>()(devtools(
    persist((set) => ({
    patients : [],
    activeId: '',
    addPatient: (data) => {
        const newPatiente = createPatiente(data)
        set((state) => ({
            patients: [...state.patients, newPatiente]
        }))
    },
    deletePatiente: (id) => {
        // console.log(id)
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    },
    getPatienteById: (id) => {
        set(() => ({
            activeId: id
        }))
    },
    uppdatePatient : (data) => {
        set((state) => ({
            patients: state.patients.map
            (patient => patient.id === state.activeId ? 
                {id: state.activeId, ...data} : patient), activeId: ''
        }))
    }
}),{
    name: 'patiente-storage',
})

))
