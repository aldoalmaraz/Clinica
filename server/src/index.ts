import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import pacientesRoutes from './routes/pacientesRoutes';
import loginRoutes from './routes/loginRoutes';
import citasRoutes from './routes/citasRoutes';
import citas2Routes from './routes/citas2Routes';
import doctoresRoutes from './routes/doctoresRoutes';
import historialRoutes from './routes/historialRoutes';
import NumCitasRoutes from './routes/NumCitasRoutes';
import adminLoginRoutes from './routes/adminLoginRoutes';
import adminCitasRoutes from './routes/adminCitasRoutes';
import adminCitas2Routes from './routes/adminCitas2Routes';


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
        this.app.use('/api/historial', historialRoutes);
        this.app.use('/api/historial/NumCitas', NumCitasRoutes);
        this.app.use('/api/adminLogin', adminLoginRoutes);
        this.app.use('/api/adminCitas', adminCitasRoutes);
        this.app.use('/api/adminCitas2', adminCitas2Routes);




    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();