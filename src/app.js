import express from 'express';

const app = express();
app.use(express.json());

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

app.post('/funcionarios',(req, res)=>{
    funcionarios.push(req.body);
    res.status(201).send('Funcionário cadastrado com sucesso');
})
export default app;
