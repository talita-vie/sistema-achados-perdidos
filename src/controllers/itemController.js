import { prismaClient } from "../db/prismaClient.js";

export class ItemController {

  // criar item
  async criarItem(req, res) {
    const {
      nome,
      data,
      localizacao,
      contato,
      foto,
      status,
      categoriaId
    } = req.body;

    const usuarioId = req.usuario.id;

    try {
      const novoItem = await prismaClient.item.create({
        data: {
          nome,
          data: new Date(data),
          localizacao,
          contato,
          foto,
          status,
          categoriaId,
          usuarioId
        }
      });

      return res.status(201).json(novoItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar novo item' });
    }
  }

  // lstar todos os itens (público)
  async listarTodos(req, res) {
    try {
      const itens = await prismaClient.item.findMany({
        include: {
          categoria: true,
          usuario: {
            select: { id: true, nome: true, email: true }
          }
        },
        orderBy: {
          data: 'desc'
        }
      });

      return res.status(200).json(itens);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar itens' });
    }
  }

  // atualizar item 
  async atualizarItem(req, res) {
    const { id } = req.params;
    const {
      nome,
      data,
      localizacao,
      contato,
      foto,
      status,
      categoriaId
    } = req.body;

    try {
      const item = await prismaClient.item.findUnique({
        where: { id: parseInt(id) }
      });

      if (!item || item.usuarioId !== req.usuario.id) {
        return res.status(403).json({ error: 'Você não tem permissão para editar esse item' });
      }

      const atualizado = await prismaClient.item.update({
        where: { id: parseInt(id) },
        data: {
          nome,
          data: new Date(data),
          localizacao,
          contato,
          foto,
          status,
          categoriaId
        }
      });

      return res.json(atualizado);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar item' });
    }
  }

  // deletar item
  async deletarItem(req, res) {
    const { id } = req.params;

    try {
      const item = await prismaClient.item.findUnique({
        where: { id: parseInt(id) }
      });

      if (!item || item.usuarioId !== req.usuario.id) {
        return res.status(403).json({ error: 'Você não tem permissão para deletar esse item' });
      }

      await prismaClient.item.delete({
        where: { id: parseInt(id) }
      });

      return res.json({ message: 'Item deletado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar item' });
    }
  }
}
