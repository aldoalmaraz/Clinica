import express, { Router } from 'express';

import citasController from '../controllers/citasController';

class CitasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/:correo', citasController.list);
        this.router.post('/:id', citasController.getOne);
        this.router.post('/', citasController.create);
        this.router.put('/:id', citasController.update);
        this.router.delete('/:id', citasController.delete);
    }

}

export default new CitasRoutes().router;

