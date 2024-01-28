import express from 'express';
import conexao from '../infra/conexao.js';

const app = express();
app.use(express.json());

function buscarFuncionarioPorId(id_param){
    return funcionarios.find(funcionario => funcionario.id == id_param);
}

function buscarPosicaoDoObjeto(id_param){
    return funcionarios.findIndex(funcionario => funcionario.id == id_param);
}

//Rotas
app.get('/funcionarios', (req, res) => {
    const sql = 'SELECT * FROM funcionarios';
    conexao.query(sql, (error, result) => {
        if (error) throw error;
        res.status(200).json(result);
    })
})

app.get('/funcionarios/:id', (req, res) =>{
    const id = req.params.id;
    const sql = 'SELECT * FROM funcionarios WHERE id=?'
    conexao.query(sql, id, (error, result) =>{
        if (error) throw error;
        let linha = result[0];
        res.status(200).json(linha);
    })
})

app.post('/funcionarios',(req, res)=>{
    const dados = req.body;
    const sql = 'INSERT INTO funcionarios SET?';
    conexao.query(sql, dados, (error, result) =>{
        if(error) throw error;
        res.status(201).send('Funcionário cadastrado com sucesso');
    })
})

app.delete('/funcionarios/:id', (req, res) =>{
    const id = req.params.id;
    const sql = 'DELETE FROM funcionarios WHERE id=?';
    conexao.query(sql, id, (error, result) =>{
        if(error) throw error;
        res.status(200).send('Funcionário excluído do banco de dados')
    })
})

app.put('/funcionarios/:id', (req, res) =>{
    const id = req.params.id;
    const dados = req.body;
    const sql = 'UPDATE funcionarios SET?  WHERE id=?'
    conexao.query(sql, [dados, id], (error, result) =>{
        if(error) throw error;
        res.status(200).json(result);
    })
})

export default app;
