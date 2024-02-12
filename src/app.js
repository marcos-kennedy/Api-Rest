import express from 'express';
import FuncionariosController from './app/controllers/funcionariosController.js'; 

const app = express();
app.use(express.json());

//Rotas
app.get('/funcionarios', FuncionariosController.index);
app.get('/funcionarios/:id', FuncionariosController.show);
app.post('/funcionarios', FuncionariosController.store);
app.put('/funcionarios/:id', FuncionariosController.update);
app.delete('/funcionarios/:id', FuncionariosController.delete);

export default app;
