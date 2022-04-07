const dog = require('../database/dogs-db');
const { nanoid } = require('nanoid');

class dogFunction {
    async showDog(req, res) {
        //AQUI TU BOTA QUE SÓ VAI EXECUTAR A AÇÃO ABAIXO SE O USER TIVER LOGADO
        res.render('dog-list', { dogs: dog });
    };

    async showDetails(req, res) {
        const { id } = req.params;
        const dogfiltrado = dog.filter(value => value.id == id);
        res.render('dog-details', { dogs: dogfiltrado[0] });
    }

    async showCreateDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO
        res.render('dog-create');
    };

    async deleteDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO
        const { id } = req.params;

    };

    async updateDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO
        const { id } = req.params;
        res.send({ id });
    }

    async createDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO 
        dog.push({
            id: nanoid(8),
            ...req.body
        });

        res.redirect('/dogs');
    }

}

module.exports = { dogFunction };