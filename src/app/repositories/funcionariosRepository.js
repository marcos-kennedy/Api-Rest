import {consulta} from '../database/conexao.js';

class FuncionariosRepository{
    create(dados){
        const sql = 'INSERT INTO funcionarios SET?';
        return consulta(sql, dados, 'Não foi possível cadastrar funcionário.')
    }
    findAll(){
        const sql = 'SELECT * FROM funcionarios';
        return consulta(sql, 'Não foi possível listar os funcionários.')
    }
    findById(id_params){
        const sql = 'SELECT * FROM funcionarios WHERE id=?';
        return consulta(sql, id_params ,'Não foi possível localizar o funcionário.')
    }
    update(dados, id_params){
        const sql = 'UPDATE funcionarios SET?  WHERE id=?'
        return consulta(sql, [dados, id_params], 'Não foi possível atualizar os dados do funcionário.')
    }
    delete(id_params){
        const sql = 'DELETE FROM funcionarios WHERE id=?';
        return consulta(sql, id_params ,'Não foi possível deletar o funcionário.')
    }
}

export default new FuncionariosRepository();
