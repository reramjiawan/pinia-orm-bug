import { Model } from 'pinia-orm';
import { Attr } from 'pinia-orm/dist/decorators';

export class LinkModel extends Model {
  static entity = 'links';

  @Attr()
  declare id: string;

  @Attr()
  declare type: string;

  @Attr()
  declare name: string;
}
