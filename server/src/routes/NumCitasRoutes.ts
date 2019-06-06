import express, { Router } from 'express';

import NumCitasController from '../controllers/NumCitasController';

class NumCitasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/:id', NumCitasController.getOne);
     
    }

}

export default new NumCitasRoutes().router;

