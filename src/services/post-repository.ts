import { injectable, inject } from 'inversify';

import { Post } from '../posts';
import { IPostRepo, IDatabaseStorage } from '../interfaces';
import * as TYPES from '../types';

@injectable()
class PostRepository<T extends Post> implements IPostRepo<Post> {
  constructor(@inject(TYPES.DatabaseStorage) private _db: IDatabaseStorage) {}
  getPosts(): Post[] {
    const posts = this._db.fetchAll();
    return posts.map((post) => {
      return new Post(post.title, post.description, post.id);
    });
  }

  save(entity: T): Post {
    const record = this._db.insert({
      title: entity.getTitle(),
      description: entity.getDescription(),
    });
    return new Post(record.title, record.description, record.id);
  }
}

export { PostRepository };
