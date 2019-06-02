import { Request, Response } from 'express';


import pool from '../database';

class PacientesController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM pacientes');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM pacientes WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El paciente no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO pacientes set ?', [req.body]);
        res.json({ message: 'Paciente registrado correctamente!' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE pacientes set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Se ha actualizado correctamente los datos del paciente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM pacientes WHERE id = ?', [id]);
        res.json({ message: "El paciente ha sido eliminado correctamente!" });
    }

// LOGIN METODS

public async getLogin(req: Request, res: Response): Promise<void> {
    alert("correo electronico invalido");
}



}



const pacientesController = new PacientesController;
export default pacientesController;