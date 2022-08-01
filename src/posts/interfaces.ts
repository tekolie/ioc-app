import { Post } from './index';

export interface IPostPersist<T> {
  save(entity: T): T;
}

export interface IPostRepo<T extends Post> extends IPostPersist<T> {
  getPosts(): T[];
}

export interface IPostService {
  getPosts(): Post[];
  create(title: string, description: string): Post;
}
