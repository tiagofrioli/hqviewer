import { Request, response, Response } from "express";
import EpisodesService from "../service/EpisodesService";

class EpisodesController {
  async create(req: Request, res: Response) {
    const { title, episode, thumbnail } = req.body;

    const episodesService = new EpisodesService();

    try {
      const hqepisodes = episodesService.create({ title, episode, thumbnail });

      return res.json(hqepisodes);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export default EpisodesController;
