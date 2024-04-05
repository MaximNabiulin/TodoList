const ls = {
  get<T>(key: string): T | null {
    const result = localStorage.getItem(key);
    return result === null ? null : JSON.parse(result);
  },
  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
    const event = new StorageEvent('storage', {key});
    window.dispatchEvent(event);
  },
};

export class LocalKeyValue<T> {
  private _key: string;

  constructor(key: string) {
    if (typeof key !== 'string' || key.length === 0) {
      throw new Error('некоректное значение ключа');
    }
    this._key = key;
  }

  get(): T | null {
    return ls.get<T>(this._key);
  }
  set(value: T): void {
    ls.set<T>(this._key, value);
  }
}
