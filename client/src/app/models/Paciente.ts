import { Title } from '@angular/platform-browser';

export interface Paciente {
    id?: number,
    Nombre?: string,
    ApellidoPaterno?: string,
    ApellidoMaterno?: string,
    Correo?: string,
    Password?: string,
    Imagen?: string,
    created_at?: Date,
    EnfermedadesCronicas?:string,
    ResumenClinico?:string
};