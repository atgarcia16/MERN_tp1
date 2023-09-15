import starsData from '../../data/stars.json'
import { Request, Response } from 'express'

export async function getStarsController(req: Request, res: Response) {
    const name = req.query.type as string
    let stars = starsData
    if (name) {
        stars = starsData.filter((star) =>
            star.name.includes(name))
    }
    res.status(200).json(stars)
}