
const prompt = require('prompt-sync')({ sigint: true });

function exibirOpcaoSelecionada(entrada: number) {


    entrada = prompt("Escolha uma das opções:");
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


export default exibirOpcaoSelecionada


