import { Router } from "express";
import {createcadastro,  getcadastroById,
} from "../repsitory/usuarioRepository.js";

const router = Router();


router.get("/", async (req, res) => {
  try {
    const cadastro = await getAllcadastro();
        res.status(200).json(cadastro); 
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar cadastro", error: error.message });
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  getcadastroById(id)
    .then((cadastro) => {
      res.json(cadastro); 
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const cadastro = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  };
  createcadastro(cadastro)
    .then((cadastro) => {
      res.status(201).json(cadastro);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const cadastroAtualizado = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  }
  });


export default router;