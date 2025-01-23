import { Request, Response } from "express";
import prisma from "../../prisma/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const SECRET_KEY = "Do&A0:P50))wNg|Qb<l[Y9L]>3ZkM3";

export async function signinController(request: Request, response: Response) {
  const { email, password } = request.body;

  try {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userExist) {
      return response.status(401).json({ erro: "Credenciais inválidas" });
    }

    const isValidPassword = await bcrypt.compare(password, userExist.password);
    if (!isValidPassword) {
      return response.status(401).json({ erro: "Credenciais inválidas" });
    }

    const token = await jwt.sign(
      {
        id: userExist.id,
        name: userExist.name,
        email: userExist.email,
      },
      SECRET_KEY
    );

    return response.json({ token });
  } catch (error) {
    return response.status(500).json({ erro: "Erro interno do servidor" });
  }
}
