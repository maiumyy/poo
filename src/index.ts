import Materia from './models/Materia.js';
import Tarefa from './models/Tarefa.js';
import ListaDeTarefas from './models/ListaDeTarefas.js';

const matematica = new Materia(
  "Matemática", 
  "Dr. Silva", 
  "Segunda 14h", 
  "#3498db"
);
console.log("Matéria criada:", matematica.toString());

const tarefa1 = new Tarefa(
  1,
  "Resolver exercícios de álgebra",
  matematica.nome,
  new Date("2023-11-20"),
  "alta"
);
console.log("Tarefa 1:", tarefa1);
console.log("Está atrasada?", tarefa1.estaAtrasada());

const lista = new ListaDeTarefas();

lista.adicionarTarefa(tarefa1);
lista.adicionarTarefa(new Tarefa(
  2,
  "Estudar para prova",
  "Física",
  new Date("2023-12-10"),
  "media"
));

console.log("Todas as tarefas:", lista.tarefas);

console.log("Tarefas de Matemática:", lista.filtrarPorMateria("Matemática"));

lista.removerTarefa(1);
console.log("Após remover:", lista.tarefas);