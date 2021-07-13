import { Repository } from "typeorm";
import { Episodes } from "../entities/Episodes";
import { IEpisodes } from "./types";

class EpisodesService {
  private episodesRepository: Repository<Episodes>;

  async create({ title, episode, thumbnail }: IEpisodes) {
    const hqepisodes = this.episodesRepository.create({
      title,
      episode,
      thumbnail,
    });

    await this.episodesRepository.save(hqepisodes);
    return hqepisodes;
  }
}

export default EpisodesService;
