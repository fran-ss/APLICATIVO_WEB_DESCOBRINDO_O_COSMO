import "./style.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate para navegação

// Definição dos tipos para os dados
interface LoginData {
  email: string;
  password: string;
}

export function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const navigate = useNavigate(); // Inicializando o useNavigate

  // Função para fazer login
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validação de campos
    if (!loginData.email || !loginData.password) {
      setResponse({ error: "Todos os campos devem ser preenchidos" });
      return;
    }

    setLoading(true); // Inicia o carregamento
    try {
      const res = await axios.post("http://localhost:3333/signin", loginData);
      setResponse(res.data); // Definir a resposta do backend

      // Verifica se a resposta não contém erro e redireciona para a página '/acessivel'
      if (!res.data.error) {
        navigate("/story"); // Redireciona para a página '/acessivel'
      }
    } catch (error: any) {
      // Captura e exibe erro, se houver erro de requisição
      if (error.response && error.response.data && error.response.data.erro) {
        setResponse({ error: error.response.data.erro }); // Exibe a mensagem de erro do backend
      } else {
        setResponse({ error: "Erro ao fazer login. Tente novamente." });
      }
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Função para fechar a mensagem de erro
  const closeErrorMessage = () => {
    setResponse(null); // Limpa a mensagem de erro
  };

  return (
    <div id="page_1">
      <div id="page-1-1">
        <h1>Bem-vindo</h1>
        <h2>Agora, faça Login.</h2>
        <form id="login1" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Senha"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>

        {/* Exibir resposta do backend */}
        {response && response.error && (
          
          <div className="error-message">
            <p className="close-button" onClick={closeErrorMessage}>
              ×
            </p>
            <h4>Erro ao fazer login:</h4>
            <p>{response.error}</p>
            
          </div>
        )}
      </div>
    </div>
  );
}