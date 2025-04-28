export default class Tarefa {
    constructor(id, titulo, materia, data, prioridade, descricao = "", concluida = false) {
        this._id = id;
        this._titulo = titulo;
        this._materia = materia;
        this._data = data;
        this._prioridade = prioridade;
        this._descricao = descricao;
        this._concluida = concluida;
    }
    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get materia() {
        return this._materia;
    }
    get data() {
        return this._data;
    }
    get prioridade() {
        return this._prioridade;
    }
    get concluida() {
        return this._concluida;
    }
    set titulo(novoTitulo) {
        if (novoTitulo.length >= 3) {
            this._titulo = novoTitulo;
        }
        else {
            console.error("Título deve ter pelo menos 3 caracteres!");
        }
    }
    marcarComoConcluida() {
        this._concluida = true;
    }
    estaAtrasada() {
        return this._data < new Date() && !this._concluida;
    }
    toString() {
        return `[${this._prioridade}] ${this._titulo} (${this._materia}) - ${this._data.toLocaleDateString()}`;
    }
}
