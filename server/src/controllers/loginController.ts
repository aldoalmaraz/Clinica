import { Request, Response } from 'express';


import pool from '../database';

class LoginController {

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM pacientes WHERE idPacientes = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El paciente no existe" });
    }

    public async Comparar(req: Request, res: Response,): Promise<any> {
        const query = await pool.query('SELECT * FROM pacientes WHERE Correo = ? AND Password = ?', [req.body.Correo,req.body.Password]);
     

if(query==""){
    res.json("No existe");

}
res.json("Si existe");

    }




}



const loginController = new LoginController;
export default loginController;