import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { EpisodesRepository } from "../repositories/EpisodesRepository";
import EpisodesService from "../service/EpisodesService";

class EpisodesController {
  async create(req: Request, res: Response) {
    const { title, episode, thumbnail } = req.body;

    const episodesRepository = getCustomRepository(EpisodesRepository);

    const hqepisodes = episodesRepository.create({
      title,
      episode,
      thumbnail,
    });

    await episodesRepository.save(hqepisodes);

    return res.status(201).json(hqepisodes);
  }

  async show(req: Request, res: Response) {
    const episodesRepository = getCustomRepository(EpisodesRepository);

    const allEpisodes = await episodesRepository.find();

    return res.json(allEpisodes);
  }
}

export default EpisodesController;
