import { Router } from "express";
import { getCustomRepository } from "typeorm";
import EpisodesController from "./controllers/EpisodesController";
import { EpisodesRepository } from "./repositories/EpisodesRepository";
import "./database";

const routes = Router();

const episodesController = new EpisodesController();

routes.post("/episodes", episodesController.create);

routes.get("/episodes", episodesController.show);

/* routes.post("/episodes", async (request, response) => {
  const episodesRepository = getCustomRepository(EpisodesRepository);
  const { title, episode, thumbnail } = request.body;

  const hqepisodes = episodesRepository.create({
    title,
    episode,
    thumbnail,
  });

  await episodesRepository.save(hqepisodes);
  return response.json(hqepisodes);
}); */

export default routes;
