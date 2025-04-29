export default class Tarefa {
    private _id: number;
    private _titulo: string;
    private _descricao: string;
    private _materia: string;
    private _data: Date;
    private _prioridade: 'alta' | 'media' | 'baixa';
    private _concluida: boolean;
  
    constructor(
      id: number,
      titulo: string,
      materia: string,
      data: Date,
      prioridade: 'alta' | 'media' | 'baixa',
      descricao: string = "",
      concluida: boolean = false
    ) {
      this._id = id;
      this._titulo = titulo;
      this._materia = materia;
      this._data = data;
      this._prioridade = prioridade;
      this._descricao = descricao;
      this._concluida = concluida;
    }
  
    get id(): number {
      return this._id;
    }
  
    get titulo(): string {
      return this._titulo;
    }
  
    get materia(): string {
      return this._materia;
    }
  
    get data(): Date {
      return this._data;
    }
  
    get prioridade(): 'alta' | 'media' | 'baixa' {
      return this._prioridade;
    }
  
    get concluida(): boolean {
      return this._concluida;
    }
  
    set titulo(novoTitulo: string) {
      if (novoTitulo.length >= 3) {
        this._titulo = novoTitulo;
      } else {
        console.error("Título deve ter pelo menos 3 caracteres!");
      }
    }
  
    public marcarComoConcluida(): void {
      this._concluida = true;
    }
  
    public estaAtrasada(): boolean {
      return this._data < new Date() && !this._concluida;
    }
  
    public toString(): string {
      return `[${this._prioridade}] ${this._titulo} (${this._materia}) - ${this._data.toLocaleDateString()}`;
    }
  }