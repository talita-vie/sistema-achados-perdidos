import bcrypt from "bcryptjs";
import { prismaClient } from "../db/prismaClient.js";

export class UserController {
  
  // Search user using id
  async searchUserForId (req, res) {
    const {id} = req.params;

    try {
      const user = await prismaClient.usuario.findFirst({
        where: {
          id: parseInt(id),
        },
        include: {
          itens: true
        }
      });

      return res.status(200).json(user);

    } catch(error){
      console.error(error);
      return res.status(500).json({error: "Erro ao buscar Usuario", detail: error.message });
    }
  }

  //Search all users
  async searchUser (req, res) {
    try {
      const users = await prismaClient.usuario.findMany();
      return res.status(200).json(users)
    } catch(error) {
      console.error(error);
      return res.status(500).json({error:error})
    }
  }

  //updateCategory
  async updateUser (req, res) {
    const { id } = req.params;
    const{ nome, telefone, email, senha } = req.body;

    try {
      const data = {nome, telefone, email};
      
      if (senha) {
        data.senha = bcrypt.hashSync(senha, 10);
      }

      const user = await prismaClient.usuario.update ({
        where: {id: parseInt(id) },
        data,
      });

      return res.status(200).json(user);

    }catch (error) {
      return res.status(500).json({error: error})
    }
  }

  //deleteUser
  async deleteUser (req, res) {
    const { id } = req.params;

    try {
      const user = await prismaClient.usuario.findFirst({
        where: {id: parseInt(id)}
      });

      if (!user) {
        return res.status(404).json({message: "Usuário não encontrado"})
      }

      await prismaClient.usuario.delete({
        where: {id: parseInt(id)}
      });

      return res.status(204).send();

    }catch (error) {
      return res.status(500).json({error: error})
    }
  }
}