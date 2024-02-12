import FuncionariosRepository from '../repositories/funcionariosRepository.js';

class FuncionariosController{
    async index(req, res) {
        const result = await FuncionariosRepository.findAll();
        res.status(200).json(result);
    }
    async show(req, res) {
        const id = req.params.id;
        const result = await FuncionariosRepository.findById(id);
        res.status(200).json(result);
    }
    async store(req, res) {
        const dados = req.body;
        const result = await FuncionariosRepository.create(dados);
        res.status(201).json(result);
    }
    async update(req, res) {
        const id = req.params.id;
        const dados = req.body;
        const result = await FuncionariosRepository.update(dados, id);
        res.status(200).json(result);
    }
    async delete(req, res) {
        const id = req.params.id;
        const result = await FuncionariosRepository.delete(id);
        res.status(200).json(result);
    }
}

// padrão Singleton
export default new FuncionariosController();
