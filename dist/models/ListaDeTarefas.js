export default class ListaDeTarefas {
    constructor() {
        this._tarefas = [];
    }
    adicionarTarefa(tarefa) {
        if (this._tarefas.some(t => t.id === tarefa.id)) {
            console.error(`Erro: Já existe uma tarefa com o ID ${tarefa.id}!`);
            return;
        }
        this._tarefas.push(tarefa);
    }
    removerTarefa(id) {
        this._tarefas = this._tarefas.filter(tarefa => tarefa.id !== id);
    }
    get tarefas() {
        return [...this._tarefas];
    }
    filtrarPorMateria(materia) {
        return this._tarefas.filter(tarefa => tarefa.materia === materia);
    }
    filtrarAtrasadas() {
        return this._tarefas.filter(tarefa => tarefa.estaAtrasada());
    }
}
