import express, { Router } from 'express';

import adminCitas2Controller from '../controllers/adminCitas2Controller';

class AdminCitas2Routes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/:id', adminCitas2Controller.getOne);
      
    }

}

export default new AdminCitas2Routes().router;

