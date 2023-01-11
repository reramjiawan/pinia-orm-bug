import { Model } from 'pinia-orm';
import { Attr, BelongsToMany } from 'pinia-orm/dist/decorators';
import { LinkGameModel } from '~/models/link-game.model';
import { LinkModel } from '~/models/link.model';

export class GameModel extends Model {
  static entity = 'games';

  @Attr()
  declare id: string;

  @Attr()
  declare name: string;

  @BelongsToMany(() => LinkModel, () => LinkGameModel, 'game_id', 'link_id')
  declare link: any[];
}
