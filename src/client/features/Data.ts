export default class Data {
  _name: string;
  _data: Record<string, unknown>;
  _id: number;

  static #idCount = 0;
  static #allDatas: Record<string, Data> = {}
  
  constructor(name: string, data: Record<string, unknown>) {
    let isNameTaken = null;
    let takenNameId = null;

    for (const [dataName/* , dataClass */] of Object.entries(Data.#allDatas)) {
      isNameTaken = dataName === name;
      if (isNameTaken) {
        takenNameId = Data.#allDatas[dataName]._id;
        break;
      };
    }

    if (isNameTaken) throw new Error(`This name is taken (data id: ${takenNameId})`);
    
    this._name = name;
    this._data = data;
    this._id = Data.#idCount;
    
    const thisDataConfig = { [name]: this } 
    
    Object.assign(Data.#allDatas, thisDataConfig);
    Data.#idCount++;
  }
  
  get data() { return this._data }
  get name() { return this._name }
  get id() { return this._id }
  get dataString() { return JSON.stringify(this._data) }
  get keys() { return Object.keys(this._data) }
  get entries() { return Object.entries(this._data) }
  
  add(newData: Record<string, unknown>) {
    Object.assign(this._data, newData);
    return this;
  }
  remove(removeData: string) {
    delete this._data[removeData];
    return this;
  }
}
