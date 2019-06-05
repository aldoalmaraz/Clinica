import express, { Router } from 'express';

import doctoresController from '../controllers/doctoresController';

class DoctoresRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', doctoresController.list);
        this.router.get('/:id', doctoresController.getOne);
       
    }

}

export default new DoctoresRoutes().router;

