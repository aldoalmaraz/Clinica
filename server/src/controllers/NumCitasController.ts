import { Request, Response } from 'express';


import pool from '../database';

class NumCitasController {


    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM citas WHERE Correo = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games.length);
        }
        res.status(404).json({ text: "El paciente no existe" });
    }





}



const numCitasController = new NumCitasController;
export default numCitasController;