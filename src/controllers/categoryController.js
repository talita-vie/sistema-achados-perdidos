import { prismaClient } from "../db/prismaClient.js";

export class CategoryController {
  //create new category
  async createCategory(req, res) {
    const { nome} = req.body;

    try{
      const category = await prismaClient.categoria.create({
        data: {nome},
      });

      return res.status(201).json(category);

    }catch(error) {
      return res.status(500).json({error: error.mesage })
    }
  }

  //List all categories
  async searchAllCategory(req, res) {
    try{
      const categories = await prismaClient.categoria.findMany();

      return res.status(200).json(categories);

    }catch (error) {
      return res.status(500).json({error: error.mesage})
    }
  }

  //List category by id
  async searcCategoryId(req, res) {
    const { id } = req.params;

    try{
      const category = await prismaClient.categoria.findUnique({
        where: {id: parseInt(id)}
      });

      if (!category) {
        return res.status(404).json({message: "Categoria não encontrada"});
      }

      return res.status(200).json(category);

    }catch (error) {
      return res.status(500).json({error: error.mesage})
    }
  }  

  // update category
  async updateCategory(req, res) {
    const { id } = req.params;
    const { nome} = req.body;

    try{
      const category = await prismaClient.categoria.update({
        where: {id: parseInt(id)},
        data: { nome },
      })

      return res.status(200).json(category);

    }catch (error) {
      return res.status(500).json({error: error.mesage})
    }
  }

  //delete Category
  async deleteCategory(req, res) {
    const { id } = req.params;

    try {
      await prismaClient.categoria.delete({
        where: { id: parseInt(id) },
      });

      return res.status(204).send();

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

}