import express from 'express';

const app = express();

//Mock

let funcionarios = [
    {id: 1, nome: 'Marcos kennedy', idade: 21, profissao: 'Programador'},
    {id: 2, nome: 'Kênia Santos', idade: 31, profissao: 'Professora'},
    {id: 3, nome: 'Maria de Lourdes', idade: 48, profissao: 'Auxiliar de limpeza'},
    {id: 4, nome: 'Antônio Marcos', idade: 55, profissao: 'Pedreiro'},
    {id: 5, nome: 'Jary Noronha', idade: 35, profissao: 'Engenheiro'}
]

app.get('/', (req, res) =>{
    res.send('Olá, Mundo!');
})

app.get('/funcionarios', (req, res) => {
    res.status(200).send(funcionarios);
})

export default app;
