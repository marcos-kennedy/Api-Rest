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

export default conexao;