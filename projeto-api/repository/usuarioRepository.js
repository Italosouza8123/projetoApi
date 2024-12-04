const Usuario = require('../models/UsuarioCadastro');



async function createcadastro({ nome, email, senha }) {
  try {
    Aluno.sync({ alter: true });
    return cadastro.create({ nome, email, senha });
  } catch (err) {
    console.log(err);
    
      
      async function getcadastroById (id) {
        try {
          cadastro.sync({ alter: true });
          const cadastro = await cadastro.findByPk(id); 
          if (!cadastro) {
            throw new Error("cadastro com ID ${id} não encontrado");
          }
          return cadastro; 
        } catch (error) {
          console.error("Erro ao buscar cadastro por ID:", error);
          throw error; 
        }
      }
    } 
}
      export{ createcadastro,getcadastroById};