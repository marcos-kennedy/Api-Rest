import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root$',
    database: 'db_funcionarios'
})

conexao.connect((error) => {
    if (error) throw error;
    console.log('Banco de dados conectado com sucesso')
})

/**
 * Executa uma consulta sql com ou sem valores
 * @param {String} sql instrução sql a ser executada
 * @param {String=id | [dados, id]} values para a consuta sql
 * @param {String} messageError a ser exibida se houver erro
 * @returns objeto da Promise
 */

export const consulta = (sql, values='', messageError) => {
    return new Promise((resolve, reject) =>{
        conexao.query(sql, values, (error, result) =>{
            if(error) return reject (messageError);
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        })
    })
}