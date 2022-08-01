import 'reflect-metadata';
import { Container } from 'inversify';

import { IPostRepo, IDatabaseStorage, IPostService } from '../interfaces';
import * as TYPES from '../types';
import { PostService, PostRepository, MemoryStorage } from '../services';
import { Post } from '../posts';

const container = new Container();

container.bind<IDatabaseStorage>(TYPES.DatabaseStorage).to(MemoryStorage);
container.bind<IPostRepo<Post>>(TYPES.PostRepository).to(PostRepository);
container.bind<IPostService>(TYPES.PostService).to(PostService);

export default container;
