import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${PORT}`);
})