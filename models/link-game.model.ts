import { Model } from 'pinia-orm';
import { Attr } from 'pinia-orm/dist/decorators';

export class LinkGameModel extends Model {
  static entity = 'link-game';

  static primaryKey = ['link_id', 'game_id'];

  @Attr() declare link_id: string;

  @Attr() declare game_id: string;
}
