import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Usando useNavigate para navegação

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Usando useNavigate para navegação

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validação de campos
    if (!registerData.name || !registerData.email || !registerData.password) {
      setResponse({ error: "Todos os campos devem ser preenchidos" });
      return;
    }

    setLoading(true); // Inicia o carregamento
    try {
      const res = await axios.post("http://localhost:3333/register", registerData);
      setResponse(res.data);

      // Redireciona para a página de login após registro bem-sucedido
      if (!res.data.error) {
        navigate("/login"); // Direciona para a página de login
      }
    } catch (error: any) {
      // Caso o erro venha do backend, ele será capturado e exibido
      if (error.response && error.response.data && error.response.data.erro) {
        setResponse({ error: error.response.data.erro });
      } else {
        setResponse({ error: "Erro ao registrar. Tente novamente." });
      }
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div id="page_1">
      <div id="page-1-1">
        <h1>Cadastro</h1>
        <h2>Crie sua conta</h2>
        <form onSubmit={handleRegister} id="login1">
          <input
            type="text"
            placeholder="Nome"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Senha"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
          <button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Registrar"}
          </button>
        </form>

        {/* Exibir resposta de erro do backend */}
        {response && response.error && (
          <div className="error-message">
            <h4>Erro ao Registrar:</h4>
            <p>{response.error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
