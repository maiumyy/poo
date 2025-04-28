import Tarefa from './Tarefa';

export default class ListaDeTarefas {
  private _tarefas: Tarefa[] = [];

  public adicionarTarefa(tarefa: Tarefa): void {
    if (this._tarefas.some(t => t.id === tarefa.id)) {
      console.error(`Erro: Já existe uma tarefa com o ID ${tarefa.id}!`);
      return;
    }
    this._tarefas.push(tarefa);
  }

  public removerTarefa(id: number): void {
    this._tarefas = this._tarefas.filter(tarefa => tarefa.id !== id);
  }

  get tarefas(): Tarefa[] {
    return [...this._tarefas];
  }

  public filtrarPorMateria(materia: string): Tarefa[] {
    return this._tarefas.filter(tarefa => tarefa.materia === materia);
  }

  public filtrarAtrasadas(): Tarefa[] {
    return this._tarefas.filter(tarefa => tarefa.estaAtrasada());
  }
}