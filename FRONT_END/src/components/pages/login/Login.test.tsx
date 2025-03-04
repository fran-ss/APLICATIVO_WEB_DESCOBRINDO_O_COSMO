import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter } from "react-router-dom";
import {Login} from "./index"
import "@testing-library/jest-dom";


const mockAxios = new MockAdapter(axios);

describe("Login Component", () => {
  beforeEach(() => {
    mockAxios.reset(); // Reseta os mocks antes de cada teste
  });

  test("Deve renderizar o formulário de login", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByText("Bem-vindo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  test("Deve mostrar erro se tentar logar com campos vazios", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    expect(await screen.findByText("Todos os campos devem ser preenchidos")).toBeInTheDocument();
  });

  test("Deve permitir preencher os campos de email e senha", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Senha");

    await userEvent.type(emailInput, "teste@email.com");
    await userEvent.type(passwordInput, "123456");

    expect(emailInput).toHaveValue("teste@email.com");
    expect(passwordInput).toHaveValue("123456");
  });

  test("Deve mostrar erro ao receber resposta de erro do servidor", async () => {
    mockAxios.onPost("http://localhost:3333/signin").reply(400, { erro: "Credenciais inválidas" });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    await userEvent.type(screen.getByPlaceholderText("Email"), "teste@email.com");
    await userEvent.type(screen.getByPlaceholderText("Senha"), "senhaerrada");

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    expect(await screen.findByText("Erro ao fazer login:")).toBeInTheDocument();
    expect(await screen.findByText("Credenciais inválidas")).toBeInTheDocument();
  });

  test("Deve redirecionar ao fazer login com sucesso", async () => {
    mockAxios.onPost("http://localhost:3333/signin").reply(200, { token: "fake-token" });

    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    await userEvent.type(screen.getByPlaceholderText("Email"), "teste@email.com");
    await userEvent.type(screen.getByPlaceholderText("Senha"), "123456");

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/story");
    });
  });
});
