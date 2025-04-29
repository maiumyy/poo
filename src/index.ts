import Tarefa from './models/Tarefa.js';
import Materia from './models/Materia.js';
import TarefaPrioritaria from './models/TarefaPrioritaria.js';
import ListaDeTarefas from './models/ListaDeTarefas.js';

const matematica = new Materia("Matemática", "Dr. Silva", "Segunda 14h");
const fisica = new Materia("Física", "Dra. Costa", "Terça 10h");

const tarefa1 = new Tarefa(
  1,
  "Resolver exercícios",
  matematica.nome,
  new Date("2023-11-20"), 
  "alta"
);

const tarefa2 = new Tarefa(
  2,
  "Relatório",
  fisica.nome,
  new Date("2024-01-10"), 
  "media"
);

const tarefa3 = new TarefaPrioritaria(
  3,
  "Prova urgente",
  matematica.nome,
  new Date(), 
  24 
);

const lista = new ListaDeTarefas();
lista.adicionarTarefa(tarefa1);
lista.adicionarTarefa(tarefa2);
lista.adicionarTarefa(tarefa3);

console.log("----- TESTE COMPLETO -----");

console.log("Todas as tarefas:", lista.tarefas);

console.log("Tarefas de Matemática:", lista.filtrarPorMateria("Matemática"));

console.log("Tarefas atrasadas:", lista.filtrarAtrasadas());

lista.removerTarefa(2);
console.log("Após remover ID 2:", lista.tarefas);

console.log("Tentando adicionar ID 1 duplicado:");
lista.adicionarTarefa(tarefa1); // erro, ID duplicado

console.log("Tarefa prioritária está atrasada?", tarefa3.estaAtrasada());