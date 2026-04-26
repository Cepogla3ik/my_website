import Generator from '@shared/util/Generator';

export default class Data<T extends Record<string, any> = Record<string, any>> {
  readonly #name: string;
  readonly #data: T;
  readonly #id: string;

  static #allDatas: Map<string, Data<any>> = new Map()
  
  constructor(name: string, data: T) {
    if (Data.#allDatas.has(name)) {
      const existing = Data.#allDatas.get(name)!;
      throw new Error(`This name is taken (data id: ${existing.id})`);
    }
    
    this.#name = name;
    this.#data = data;
    this.#id = new Generator("dataId", 12, { includesSpecials: true }).token;
    
    Data.#allDatas.set(name, this);
  }

  
  get data() { return this.#data }
  get name() { return this.#name }
  get id() { return this.#id }

  get dataString() { return JSON.stringify(this.#data) }
  get keys() { return Object.keys(this.#data) }
  get values() { return Object.values(this.#data) }
  get entries() { return Object.entries(this.#data) }
  
  add(newData: Partial<T>) {
    Object.assign(this.#data, newData);
    return this;
  }
  remove(key: keyof T) {
    delete this.#data[key];
    return this;
  }
}
