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

function buscarFuncionarioPorId(id_param){
    return funcionarios.find(funcionario => funcionario.id == id_param);
}

function buscarPosicaoDoObjeto(id_param){
    return funcionarios.findIndex(funcionario => funcionario.id == id_param);
}

app.get('/', (req, res) =>{
    res.send('Olá, Mundo!');
})

app.get('/funcionarios', (req, res) => {
    res.status(200).send(funcionarios);
})

app.get('/funcionarios/:id', (req, res) =>{
    let funcionario = buscarFuncionarioPorId(req.params.id);
    if (funcionario) {
        res.status(200).json(funcionario);
    } else {
        res.status(404).send('Funcionário não encontrado');
    }  
})

app.post('/funcionarios',(req, res)=>{
    funcionarios.push(req.body);
    res.status(201).send('Funcionário cadastrado com sucesso');
})

app.delete('/funcionarios/:id', (req, res) =>{
    let indice = buscarPosicaoDoObjeto(req.params.id);
    funcionarios.splice(indice, 1);
    res.status(200).send('Funcionário excluído com sucesso');
})
export default app;
