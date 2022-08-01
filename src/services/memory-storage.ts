import { injectable } from 'inversify';

import { Post } from '../posts';
import { IDatabaseStorage } from '../interfaces';

@injectable()
class MemoryStorage implements IDatabaseStorage {
  private _storage: Post[];

  constructor() {
    this._storage = [];
  }

  insert(data: any): any {
    const newId = this._storage.length + 1;
    const record = { id: newId, ...data };
    this._storage.push(record);
    return record;
  }

  fetchAll(): Post[] {
    return this._storage;
  }
}

export { MemoryStorage };
