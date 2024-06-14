import { contarOcorrencias, lerArquivo } from "./ex";

async function main() {
  const nomeArquivo = "texto/teste1.txt"; // substitua pelo nome do arquivo
  const conteudo = await lerArquivo(nomeArquivo);
  const ocorrencias = contarOcorrencias(conteudo);

  for (const [palavra, contagem] of Object.entries(ocorrencias)) {
    console.log(`${palavra}: ${contagem}`);
  }
}

main().catch(console.error);
