import app from './src/app.js';
import conexao from './infra/conexao.js'

const PORT = 3000;

conexao.connect((error) => {
    if (error) throw error;
    app.listen(PORT, () => {
        console.log('Banco de dados conectado com sucesso')
        console.log(`Servidor iniciado no endereço http://localhost:${PORT}`);
    })
})