import { Request, Response } from 'express';

import pool from '../database';

class AdminCitas2Controller {

  

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        console.log("id es:  "+id);
        const games = await pool.query('SELECT * FROM citas WHERE idCitas = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El paciente no existe" });
    }

   

}



const adminCitasController = new AdminCitas2Controller;
export default adminCitasController;