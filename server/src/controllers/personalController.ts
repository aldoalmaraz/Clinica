import { Request, Response } from 'express';


import pool from '../database';

class PersonalController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM personal');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM personal WHERE idPersonal = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El personal no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO personal set ?', [req.body]);
        res.json({ message: 'personal registrado correctamente!' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE personal set ? WHERE idPersonal = ?', [req.body, id]);
        res.json({ message: "Se ha actualizado correctamente los datos del personal" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM personal WHERE idPersonal = ?', [id]);
        res.json({ message: "El personal ha sido eliminado correctamente!" });
    }




}



const personalController = new PersonalController;
export default personalController;