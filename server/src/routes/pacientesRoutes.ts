import express, { Router } from 'express';

import pacientesController from '../controllers/pacientesController';

class PacientesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', pacientesController.list);
        this.router.get('/:id', pacientesController.getOne);
        this.router.post('/', pacientesController.create);
        this.router.put('/:id', pacientesController.update);
        this.router.delete('/:id', pacientesController.delete);
    }

}

export default new PacientesRoutes().router;

