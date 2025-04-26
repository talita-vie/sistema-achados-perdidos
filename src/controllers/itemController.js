import { prismaClient } from "../db/prismaClient.js";
import upload from "../middleware/upload.js";

export class ItemController {
  // Criar item
  async criarItem(req, res) {
    console.log("Iniciando a criação de um novo item...");
    
    // Usando o middleware de upload para processar o arquivo antes de passar para o restante da lógica
    upload(req, res, async (err) => {
      if (err) {
        console.error("Erro no upload do arquivo:", err.message);
        return res.status(400).json({ error: "Erro no upload do arquivo" });
      }

      console.log("Arquivo enviado:", req.file);  // Log para ver o arquivo

      // Pega apenas os campos enviados pelo frontend
      const { nome, descricao, localizacao } = req.body;
      const usuarioId = req.usuario.id;
      const foto = req.file ? req.file.path : null;  // Se houver foto, pega o caminho

      console.log("Campos recebidos:", { nome, descricao, localizacao, foto });

      // Verificar se os campos obrigatórios foram preenchidos
      if (!nome || !descricao || !localizacao) {
        console.error("Campos obrigatórios não preenchidos.");
        return res.status(400).json({ error: "Nome, descrição e localização são obrigatórios." });
      }

      try {
        console.log("Criando o novo item no banco de dados...");
        // Criação do item com apenas os campos recebidos
        const novoItem = await prismaClient.item.create({
          data: {
            nome,
            descricao,
            localizacao,
            foto,
            usuarioId,
            data: new Date(),  // Data atual
            status: "perdido",  // Usando valor fixo para 'status' (como você indicou no frontend)
            categoriaId: 1,  // Usando 1 como valor fixo para 'categoriaId'
          },
        });

        console.log("Novo item criado:", novoItem);
        return res.status(201).json(novoItem);
      } catch (error) {
        console.error("Erro ao criar item:", error.message, error.stack);
        return res.status(500).json({ error: "Erro ao criar novo item" });
      }
    });
  }

  // Listar todos os itens
  async listarTodos(req, res) {
    console.log("Buscando todos os itens...");
    try {
      const itens = await prismaClient.item.findMany({
        include: {
          categoria: true,
          usuario: {
            select: { id: true, nome: true, email: true },
          },
        },
        orderBy: {
          data: 'desc',
        },
      });

      console.log("Itens encontrados:", itens);
      return res.status(200).json(itens);
    } catch (error) {
      console.error("Erro ao buscar itens:", error.message, error.stack);
      return res.status(500).json({ error: "Erro ao buscar itens" });
    }
  }

  // Atualizar item
  async atualizarItem(req, res) {
    console.log("Iniciando a atualização do item...");
    const { id } = req.params;
    const { nome, descricao, localizacao, foto } = req.body;

    try {
      console.log("Buscando o item no banco de dados...");
      const item = await prismaClient.item.findUnique({
        where: { id: parseInt(id) },
      });

      if (!item) {
        console.error("Item não encontrado");
        return res.status(404).json({ error: 'Item não encontrado' });
      }

      if (item.usuarioId !== req.usuario.id) {
        console.error("Usuário não autorizado a editar este item");
        return res.status(403).json({ error: 'Você não tem permissão para editar esse item' });
      }

      console.log("Atualizando item:", { nome, descricao, localizacao, foto });

      const atualizado = await prismaClient.item.update({
        where: { id: parseInt(id) },
        data: {
          nome: nome || item.nome,  // Se o nome não for passado, mantém o nome atual
          descricao: descricao || item.descricao,  // Se a descrição não for passada, mantém a descrição atual
          localizacao: localizacao || item.localizacao,  // Mesma lógica para localização
          foto: foto || item.foto,  // Se a foto não for passada, mantém a foto atual
        },
      });

      console.log("Item atualizado:", atualizado);
      return res.json(atualizado);
    } catch (error) {
      console.error("Erro ao atualizar item:", error.message, error.stack);
      return res.status(500).json({ error: 'Erro ao atualizar item' });
    }
  }

  // Deletar item
  async deletarItem(req, res) {
    console.log("Iniciando a exclusão do item...");
    const { id } = req.params;

    try {
      console.log("Buscando o item no banco de dados...");
      const item = await prismaClient.item.findUnique({
        where: { id: parseInt(id) },
      });

      if (!item) {
        console.error("Item não encontrado");
        return res.status(404).json({ error: 'Item não encontrado' });
      }

      if (item.usuarioId !== req.usuario.id) {
        console.error("Usuário não autorizado a deletar este item");
        return res.status(403).json({ error: 'Você não tem permissão para deletar esse item' });
      }

      console.log("Deletando item:", item);
      await prismaClient.item.delete({
        where: { id: parseInt(id) },
      });

      console.log("Item deletado com sucesso.");
      return res.json({ message: 'Item deletado com sucesso' });
    } catch (error) {
      console.error("Erro ao deletar item:", error.message, error.stack);
      return res.status(500).json({ error: 'Erro ao deletar item' });
    }
  }
}
