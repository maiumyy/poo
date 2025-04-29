export default class Materia {
    private _nome: string;
    private _professor: string;
    private _horarioAula: string;
    private _cor: string;
  
    constructor(nome: string, professor: string, horarioAula: string, cor: string = '#FF0000') {
      this._nome = nome;
      this._professor = professor;
      this._horarioAula = horarioAula;
      this._cor = cor;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    get professor(): string {
      return this._professor;
    }
  
    get horarioAula(): string {
      return this._horarioAula;
    }
  
    get cor(): string {
      return this._cor;
    }
  
    set cor(novaCor: string) {
      if (novaCor.startsWith('#')) {
        this._cor = novaCor;
      } else {
        console.error("Cor inválida! Use o formato hexadecimal (#RRGGBB).");
      }
    }
  
    public toString(): string {
      return `${this._nome} (Prof. ${this._professor}) - ${this._horarioAula}`;
    }
  }