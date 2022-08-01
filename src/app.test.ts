import container from './container';
import { IPostService } from './interfaces';
import * as TYPES from './types';
import { Post } from './posts';

const service = container.get<IPostService>(TYPES.PostService);

describe('App', () => {
  it('should return a empty array', () => {
    expect(service.getPosts()).toEqual([]);
  });

  it('should create new post', () => {
    let title = 'Test';
    let description = 'Test desc';
    expect(service.create(title, description)).toBeInstanceOf(Post);
    expect(service.getPosts()[0].getTitle()).toEqual(title);
    expect(service.getPosts()[0].getDescription()).toEqual(description);
  });
});
