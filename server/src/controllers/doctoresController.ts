import { Request, Response } from 'express';


import pool from '../database';

class DoctoresController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query("SELECT * FROM personal WHERE TipoPersonal='doctor'");
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM horarios WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El doctor no existe!" });
    }

  



}



const doctoresController = new DoctoresController;
export default doctoresController;