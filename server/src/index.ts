import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import pacientesRoutes from './routes/pacientesRoutes';
import loginRoutes from './routes/loginRoutes';
import citasRoutes from './routes/citasRoutes';
import citas2Routes from './routes/citas2Routes';
import doctoresRoutes from './routes/doctoresRoutes';


class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/pacientes', pacientesRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/citas', citasRoutes);
        this.app.use('/api/citas2', citas2Routes);
        this.app.use('/api/doctores', doctoresRoutes);
        this.app.use('/api/doctoresHorarios', doctoresRoutes);

    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();