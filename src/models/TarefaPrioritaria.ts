import Tarefa from './Tarefa.js';

export default class TarefaPrioritaria extends Tarefa {
  private _prazoHoras: number;

  constructor(
    id: number,
    titulo: string,
    materia: string,
    data: Date,
    prazoHoras: number
  ) {
    super(id, titulo, materia, data, "alta");
    this._prazoHoras = prazoHoras;
  }

  public override estaAtrasada(): boolean {
    const horasRestantes = (this.data.getTime() - new Date().getTime()) / (1000 * 60 * 60);
    return horasRestantes < this._prazoHoras;
  }
}