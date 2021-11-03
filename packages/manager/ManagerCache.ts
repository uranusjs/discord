import { CacheOptions } from '../core/Configuration';

export class ManagerCache<K, V> extends Map<any, any> {
  #$options: CacheOptions;
  stateName: string;
  constructor(stateName: string, options: CacheOptions) {
    super();
    this.#$options = options;
    this.stateName = stateName;
  }
  add(id: K, data: V) {
    if (this.stateName !== undefined) {
      if (this.#$options.setLimitCache) {
        if (this.#$options.limit[this.stateName] !== undefined) {
          if (this.size > this.#$options.limit[this.stateName]) {
            return false
          }
        }
      }
    }
    this.set(id, data)
    return true
  }
}