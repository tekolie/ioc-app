import { injectable, inject } from 'inversify';

import { Post } from '../posts';
import { IPostRepo, IPostService } from '../interfaces';
import * as TYPES from '../types';

@injectable()
class PostService implements IPostService {
  constructor(@inject(TYPES.PostRepository) private _repository: IPostRepo<Post>) {}

  getPosts(): Post[] {
    const posts = this._repository.getPosts();
    return posts;
  }

  create(title: string, description: string): Post {
    const post = new Post(title, description);
    return this._repository.save(post);
  }
}

export { PostService };
