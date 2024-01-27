import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root$',
    database: 'db_funcionarios'
})

export default conexao;