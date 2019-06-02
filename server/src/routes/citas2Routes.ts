import express, { Router } from 'express';

import citas2Controller from '../controllers/citas2Controller';

class Citas2Routes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/:id', citas2Controller.getOne);
      
    }

}

export default new Citas2Routes().router;

