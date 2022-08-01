import { Post } from './index';

describe('Post', () => {
  let post = null;

  beforeAll(() => {
    post = new Post('Hello world', 'This is so cool');
  });

  it('should return title', () => {
    expect(post?.getTitle()).toEqual('Hello world');
  });

  it('should return description', () => {
    expect(post?.getDescription()).toEqual('This is so cool');
  });

  describe('when ID is not provided', () => {
    it('should return undefined', () => {
      expect(post?.getId()).toBeUndefined();
    });
  });

  describe('when ID provided on init', () => {
    it('should return ID', () => {
      let post = new Post('Hello world', 'This is so cool', 1);
      expect(post?.getId()).toEqual(1);
    });
  });
});
