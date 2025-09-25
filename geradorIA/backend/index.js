
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// middlewares
app.use(cors());
app.use(express.json());

// rota de teste
app.get("/", (req, res) => {
  res.send("API do Gerador de Roteiros está rodando 🚀");
});

// rota para receber o formulário
app.post("/formulario", (req, res) => {
  console.log("Dados recebidos:", req.body);
  res.json({ message: "Formulário recebido com sucesso!" });
});

// inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

