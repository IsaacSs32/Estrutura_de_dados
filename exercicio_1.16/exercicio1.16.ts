
const prompt = require('prompt-sync')({ sigint: true });

function exibirOpcaoSelecionada(entrada: number) {


    entrada = prompt("Escolha uma das opções acima:");
    switch (true) {
        case entrada == 1:
            console.log("Você selecionou: Criar um cadastro");
            break;
        case entrada == 2:
            console.log("Você selecionou: Excluir um Cadastro");
            break;
        case entrada == 3:
            console.log("Você selecionou: Atualizar um Cadastro");
            break;
        case entrada == 4:
            console.log("Você selecionou: Listar Cadastros");
            break;
        default:
            console.log("Opção inválida!");
    }
}
console.log("Opção 1: Criar cadastro.")
console.log("Opção 2: Excluir cadastro.")
console.log("Opção 3: Atualizar cadastro.")
console.log("Opção 4: listar cadastro.")


export default exibirOpcaoSelecionada


