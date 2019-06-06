import { Request, Response } from 'express';


import pool from '../database';

class HistorialController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query("SELECT * FROM personal WHERE TipoPersonal='doctor'");
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM pacientes WHERE Correo = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El doctor no existe!" });
    }
    
    public async getOne2(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM citas WHERE Correo = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games.length);
        }
        res.status(404).json({ text: "El doctor no existe!" });
    }
    

   
}



const historialController = new HistorialController;
export default historialController;