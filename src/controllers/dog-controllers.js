const dog = require('../database/dogs-db');
const { nanoid } = require('nanoid');
const dogs = require('../database/dogs-db');

class dogFunction {
    async showDog(req, res) {
        //AQUI TU BOTA QUE SÓ VAI EXECUTAR A AÇÃO ABAIXO SE O USER TIVER LOGADO. else res.redirect('/public/login.html');
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

    async createDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO 
        dog.push({
            id: nanoid(8),
            ...req.body
        });
        console.log('Criado com sucesso')
        res.redirect('/dogs');
    }

    async showUpdateDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO
        const { id } = req.params;
        const dogfiltrado = dog.filter(value => value.id == id);
        res.render('dog-update', { dogs: dogfiltrado[0] })
    }

    async updateDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO
        const { id } = req.params;
        let c = 0;
        while (c < dogs.length) {
            if (dogs[c].id == id) {
                dogs[c].raca = req.body.raca;
                dogs[c].porte = req.body.porte;
                dogs[c].descricaocurta = req.body.descricaocurta;
                dogs[c].descricao = req.body.descricao;
                console.log('Alterado com sucesso')
                return res.redirect('/dogs');
            }
            c++;
        }
    }

    async deleteDog(req, res) {
        //COLOCAR AQUI QUE SÓ O ADM TEM AUTORIZAÇÃO
        const { id } = req.params;
        let c = 0;
        while (c < dogs.length) {
            if (dogs[c].id == id) {
                dogs.splice(c, 1);
                console.log('Excluido com sucesso')
                return res.redirect('/dogs');
            }
            c++;
        }
    }

    };



module.exports = { dogFunction };