import ListaDeTarefas from '../models/ListaDeTarefas';
const CHAVE_LOCAL_STORAGE = "studyTask_tarefas";
export default class ArmazenamentoService {
    static salvar(lista) {
        const dados = JSON.stringify(lista.tarefas);
        localStorage.setItem(CHAVE_LOCAL_STORAGE, dados);
    }
    static carregar() {
        const lista = new ListaDeTarefas();
        const dados = localStorage.getItem(CHAVE_LOCAL_STORAGE);
        if (dados) {
            try {
                const tarefasSalvas = JSON.parse(dados);
                tarefasSalvas.forEach((tarefa) => {
                    tarefa._data = new Date(tarefa._data);
                    lista.adicionarTarefa(tarefa);
                });
            }
            catch (e) {
                console.error("Erro ao carregar tarefas:", e);
            }
        }
        return lista;
    }
    static limpar() {
        localStorage.removeItem(CHAVE_LOCAL_STORAGE);
    }
}
