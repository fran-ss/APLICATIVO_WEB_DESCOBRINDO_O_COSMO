import express from "express";
import cors from "cors"; // Importando o pacote cors
import { routes } from "./Routes/Routes"; // Supondo que suas rotas estão em 'Routes'

const app = express();

// Usando o CORS para permitir todas as origens (pode ser configurado de forma mais específica)
app.use(cors());

// Middleware para analisar o corpo da requisição em JSON
app.use(express.json());

// Usando as rotas
app.use(routes);

// Iniciar o servidor
app.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
