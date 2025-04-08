import { Router } from "express";
import { CategoryController } from "../controllers/categoryController.js";

const router = Router();
const categoryController = new CategoryController();

router.post("/", categoryController.createCategory);
router.get("/", categoryController.searchAllCategory);
router.get("/:id", categoryController.searcCategoryId);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

export default router;