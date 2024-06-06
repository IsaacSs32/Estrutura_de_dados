import * as fs from "fs";
import * as readline from "readline";

// Função para ler o conteúdo do arquivo
async function lerArquivo(nomeArquivo: string): Promise<string> {
  const fileStream = fs.createReadStream(nomeArquivo);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let conteudo = "";
  for await (const line of rl) {
    conteudo += line + "\n";
  }
  return conteudo;
}

// Função para limpar o texto removendo a pontuação
function limparTexto(texto: string): string {
  return texto.replace(/[.,;:]/g, ""); // remove apenas as pontuações especificadas
}

// Função para contar ocorrências de palavras e pontuações
function contarOcorrencias(texto: string): { [key: string]: number } {
  const textoLimpo = limparTexto(texto);
  const palavras = textoLimpo.split(/\s+/);
  const contagem: { [key: string]: number } = {};

  for (const palavra of palavras) {
    if (palavra) {
      contagem[palavra] = (contagem[palavra] || 0) + 1;
    }
  }

  // Contagem de caracteres de pontuação
  const pontuacoes = [",", ";", ".", ":"];
  for (const pontuacao of pontuacoes) {
    contagem[pontuacao] = texto.split(pontuacao).length - 1;
  }

  return contagem;
}

// Função principal
async function main() {
  const nomeArquivo = "texto/teste1.txt"; // substitua pelo nome do arquivo
  const conteudo = await lerArquivo(nomeArquivo);
  const ocorrencias = contarOcorrencias(conteudo);

  for (const [palavra, contagem] of Object.entries(ocorrencias)) {
    console.log(`${palavra}: ${contagem}`);
  }
}

main().catch(console.error);
