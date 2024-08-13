export interface initialFormProps {
    tipodeServicio: string
    fechaServicio: string
    firstName: string
    email: string
    phone: number | string
    tyc: boolean
}

export type Services = 'Servicio de Almacenaje' | 'Servicio de Transporte' | ''

export interface initialErrorProps {
    tipodeServicio: string
    fechaServicio: string
    firstName: string
    email: string
    phone: number | string
    tyc: boolean
}
