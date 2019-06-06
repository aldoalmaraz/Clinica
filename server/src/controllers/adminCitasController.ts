import { Request, Response } from 'express';

import pool from '../database';

class AdminCitasController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM citas');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.body;
        console.log("id es:  "+id);
        const games = await pool.query('SELECT * FROM citas WHERE idCitas = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El paciente no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO citas set ?', [req.body]);
        res.json({ message: 'Paciente registrado correctamente!' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE citas set ? WHERE idCitas = ?', [req.body, id]);
        res.json({ message: "Se ha actualizado correctamente los datos del paciente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM citas WHERE idCitas = ?', [id]);
        res.json({ message: "El paciente ha sido eliminado correctamente!" });
    }


}



const adminController = new AdminCitasController;
export default adminController;