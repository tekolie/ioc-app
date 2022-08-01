import container from './container';
import { IPostService } from './interfaces';
import * as TYPES from './types';

const service = container.get<IPostService>(TYPES.PostService);

// Create post
service.create('Hello world', 'Hey this is a cool post');

// Get post list
console.log(service.getPosts());
