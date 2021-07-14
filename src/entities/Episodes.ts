import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("episodes")
class Episodes {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  episode: number;

  @Column()
  thumbnail: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Episodes;
