export type Patients = {
    id: string
    name: string
    caretaker: string
    email:string
    date: Date,
    symptoms:string
}//id de pacientes


export type DraftPatient = Omit <Patients, 'id'>