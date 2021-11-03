import { CacheOptions } from '../core/Configuration';

export class ManagerCache<K, V> extends Map<K, V> {
  #$options: CacheOptions;
  stateName: string;
  constructor(stateName: string, options: CacheOptions) {
    super();
    this.#$options = options;
    this.stateName = stateName;
  }
  add(id: K, data: V) {
    if (this.stateName !== undefined) {
      if (this.#$options.addItems !== undefined) {
        return false
      }
      if (this.#$options.setLimitCache !== undefined) {
        if (this.#$options.setLimitCache) {
          if (this.#$options.limit[this.stateName] !== undefined) {
            if (this.size > this.#$options.limit[this.stateName]) {
              return false
            }
          }
        }
      }

    }
    this.set(id, data)
    return true
  }
}