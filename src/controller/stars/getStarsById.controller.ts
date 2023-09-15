import starsData from '../../data/stars.json'
import { Request, Response } from 'express'

export async function getStarsByIdController(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const star = starsData.find((star) => star.id === id)
    if(!star){
        res.status(404).json({
            error: 'POKEMON_NOT_FOUND',
            message: `Pokemon ${id} not found in the database`
        })
    }
    res.status(200).json(star)
}