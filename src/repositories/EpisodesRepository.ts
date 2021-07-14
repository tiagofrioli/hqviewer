import { EntityRepository, Repository } from "typeorm";
import Episodes from "../entities/Episodes";

@EntityRepository(Episodes)
class EpisodesRepository extends Repository<Episodes> {}

export { EpisodesRepository };
