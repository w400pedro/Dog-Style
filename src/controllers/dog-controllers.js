const dog = require('../database/dogs-db');
const { nanoid } = require('nanoid');
const dogs = require('../database/dogs-db');

class dogFunction {
    async showDog(req, res) {
        const userLogado = req.session.user;
        if (userLogado) {
            res.render('dog-list', { dogs: dog, users: userLogado });
        } else {
            res.redirect('/login.html')
        }
    };

    async showDetails(req, res) {
        const userLogado = req.session.user;
        if (userLogado) {
        const { id } = req.params;
        const dogfiltrado = dog.filter(value => value.id == id);
        res.render('dog-details', { dogs: dogfiltrado[0], users: userLogado });
        }else{
        res.send('Você não está logado <br><a href="/login.html">Voltar</a>')
        }
    };

    async showCreateDog(req, res) {
        const userLogado = req.session.user;
        if (userLogado && userLogado.adm == true) {
            res.render('dog-create', { users: userLogado });
        }else{
            res.send('Você não tem permissão para essa URL <br><a href="/dogs">Voltar</a>');
        }
    }
    async createDog(req, res) {
        const userLogado = req.session.user;
        if (userLogado && userLogado.adm == true) {
            dog.push({
                id: nanoid(8),
                ...req.body
            });
            console.log('Criado com sucesso')
            res.redirect('/dogs');
        }else{
            res.send("Você não tem permissão para essa URL <br><a href='/dogs'>Voltar</a>")
        }
        }

    async showUpdateDog(req, res) {
        const userLogado = req.session.user;
        if (userLogado && userLogado.adm == true) {
                const { id } = req.params;
                const dogfiltrado = dog.filter(value => value.id == id);
                return res.render('dog-update', { dogs: dogfiltrado[0], users: userLogado })
            } else {
                return res.send("Você não tem permissão para essa URL <br><a href='/dogs'>Voltar</a>")
            }
        }

    async updateDog(req, res) {
        const userLogado = req.session.user;
        if (userLogado && userLogado.adm == true) {
            const { id } = req.params;
            let c = 0;
            while (c < dogs.length) {
                if (dogs[c].id == id) {
                    dogs[c].raca = req.body.raca;
                    dogs[c].porte = req.body.porte;
                    dogs[c].descricaocurta = req.body.descricaocurta;
                    dogs[c].descricao = req.body.descricao;
                    dogs[c].foto = req.body.foto;
                    console.log('Alterado com sucesso')
                    return res.redirect('/dogs');
                }
                c++;
            }
        } else {
            return res.send("Você não tem permissão para essa URL <br><a href='/dogs'>Voltar</a>")
        }
        }

    async deleteDog(req, res) {
        const userLogado = req.session.user;
        if (userLogado && userLogado.adm == true) {
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
        }else {
            return res.send("Você não tem permissão para essa URL <br><a href='/dogs'>Voltar</a>")
        }
    }

    async dogBreedAsc(req, res) {
        const userLogado = req.session.user;
        if(userLogado){
        dogs.sort(function (breed1, breed2) {
            let breed3 = breed1.raca.toLowerCase();
            let breed4 = breed2.raca.toLowerCase();
            if(breed3 < breed4){
                return -1;
            }
        });
        res.redirect('/')
    }else{
        res.send('Você não está logado <br><a href="/login.html">Voltar</a>')
    }
    }

    async dogBreedDesc(req, res) {
        const userLogado = req.session.user;
        if(userLogado){
        dogs.sort(function (breed1, breed2) {
            let breed3 = breed1.raca.toLowerCase();
            let breed4 = breed2.raca.toLowerCase();
            if(breed3 > breed4){
                return -1;
            }
        });
        res.redirect('/')
    }else{
        res.send('Você não está logado <br><a href="/login.html">Voltar</a>')
    }
    }
        
    };



module.exports = { dogFunction };