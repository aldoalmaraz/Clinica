import { Title } from '@angular/platform-browser';

export interface AdminLogin {
    idAdmins?: number,
    Nombre?: string,
    ApellidoPaterno?: string,
    ApellidoMaterno?: string,
    Correo?: string,
    Password?: string,
    Imagen?: string,
    Access?:string,
    created_at?: string
};