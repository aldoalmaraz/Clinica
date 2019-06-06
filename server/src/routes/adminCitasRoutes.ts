import express, { Router } from 'express';

import adminCitasController from '../controllers/adminCitasController';

class AdminCitasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', adminCitasController.list);
        this.router.post('/:id', adminCitasController.getOne);
        this.router.post('/', adminCitasController.create);
        this.router.put('/:id', adminCitasController.update);
        this.router.delete('/:id', adminCitasController.delete);
    }

}

export default new AdminCitasRoutes().router;

