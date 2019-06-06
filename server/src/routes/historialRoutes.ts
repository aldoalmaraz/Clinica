import express, { Router } from 'express';

import historialController from '../controllers/historialController';

class HistorialRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', historialController.list);
        this.router.get('/:id', historialController.getOne);
       
    }

}

export default new HistorialRoutes().router;

