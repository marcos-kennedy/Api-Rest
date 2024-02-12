import conexao from '../database/conexao.js';

class FuncionariosController{
    index(req, res) {
        const sql = 'SELECT * FROM funcionarios';
        conexao.query(sql, (error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        })
    }
    show(req, res) {
        const id = req.params.id;
        const sql = 'SELECT * FROM funcionarios WHERE id=?'
        conexao.query(sql, id, (error, result) =>{
            if (error) throw error;
            let linha = result[0];
            res.status(200).json(linha);
        })
    }
    store(req, res) {
        const dados = req.body;
        const sql = 'INSERT INTO funcionarios SET?';
        conexao.query(sql, dados, (error, result) =>{
            if(error) throw error;
            res.status(201).send('Funcionário cadastrado com sucesso');
        })
    }
    update(req, res) {
        const id = req.params.id;
        const dados = req.body;
        const sql = 'UPDATE funcionarios SET?  WHERE id=?'
        conexao.query(sql, [dados, id], (error, result) =>{
            if(error) throw error;
            res.status(200).json(result);
        })
    }
    delete(req, res) {
        const id = req.params.id;
        const sql = 'DELETE FROM funcionarios WHERE id=?';
        conexao.query(sql, id, (error, result) =>{
            if(error) throw error;
            res.status(200).send('Funcionário excluído com sucesso')
        })
    }
}

// padrão Singleton
export default new FuncionariosController();
