export interface GeneratorOptions {
  includesNumbers?: boolean;
  includesWords?: boolean;
  includesSpecials?: boolean;
  /* specialsList?: string[]; */
}

export default class Generator {
  _token: string;

  /* #words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  #numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  #specials = ['!', '@', '#', '$', '%', '^', '&', '*']; */
  
  constructor(options: GeneratorOptions) {
    /* const {
      includesNumbers = true,
      includesWords = true,
      includesSpecials = false */
      /* specialsList = this.#specials */
    /* } = options; */
    
    this._token = "";
  }
  
  get token() { return this._token }
}
