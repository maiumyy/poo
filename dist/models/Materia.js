export default class Materia {
    constructor(nome, professor, horarioAula, cor = '#FF0000') {
        this._nome = nome;
        this._professor = professor;
        this._horarioAula = horarioAula;
        this._cor = cor;
    }
    get nome() {
        return this._nome;
    }
    get professor() {
        return this._professor;
    }
    get horarioAula() {
        return this._horarioAula;
    }
    get cor() {
        return this._cor;
    }
    set cor(novaCor) {
        if (novaCor.startsWith('#')) {
            this._cor = novaCor;
        }
        else {
            console.error("Cor inválida! Use o formato hexadecimal (#RRGGBB).");
        }
    }
    toString() {
        return `${this._nome} (Prof. ${this._professor}) - ${this._horarioAula}`;
    }
}
