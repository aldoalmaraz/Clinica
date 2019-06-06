import express, { Router } from 'express';

import adminLoginController from '../controllers/adminLoginController';

class AdminLoginRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/', adminLoginController.Comparar);  
          

    }

}

export default new AdminLoginRoutes().router;

