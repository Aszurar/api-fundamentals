import fs from "node:fs";

// Obtém o nome do arquivo a ser lido a partir dos argumentos da linha de comando
const fileName = process.argv[2];

if (!fileName) {
  console.error(" ❓ Nome do arquivo não especificado.");
  process.exit(1);
}

const stream = fs.createReadStream(fileName);

stream.on("error", (err) => {
  console.error("\n=========================================================");
  console.error("❌ Erro ao ler o arquivo ❌");
  console.error(err.message);
  console.error("=========================================================");
  process.exit(1);
})
stream.on("end", () => {
  console.info("\n=========================================================");
  console.info(`✅ Leitura do arquivo ${fileName} concluída com sucesso!`);
  console.info("=========================================================");

})

stream.pipe(process.stdout);