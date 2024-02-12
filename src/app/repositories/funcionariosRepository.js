import conexao from '../database/conexao.js';

class FuncionariosRepository{
    create(dados){
        const sql = 'INSERT INTO funcionarios SET?';
        return new Promise((resolve, reject) =>{
            conexao.query(sql, dados, (error, result) =>{
                if(error) return reject (error);
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
    findAll(){
        const sql = 'SELECT * FROM funcionarios';
        return new Promise((resolve, reject) =>{
            conexao.query(sql, (error, result) =>{
                if (error) return reject(error);
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
    findById(id_params){
        const sql = 'SELECT * FROM funcionarios WHERE id=?';
        return new Promise((resolve, reject) =>{
            conexao.query(sql, id_params, (error, result) =>{
                if (error) return reject(error);
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
    update(dados, id_params){
        const sql = 'UPDATE funcionarios SET?  WHERE id=?'
        return new Promise((resolve, reject) =>{
            conexao.query(sql, [dados, id_params], (error, result) =>{
                if(error) return reject(error);
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
    delete(id_params){
        const sql = 'DELETE FROM funcionarios WHERE id=?';
        return new Promise((resolve, reject) =>{
            conexao.query(sql, id_params, (error, result) =>{
                if(error) return reject (error);
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
}

export default new FuncionariosRepository();
