const dog = require('../database/dogs-db');

class dogFunction {
async showDog(req, res){
    //AQUI TU BOTA QUE SÓ VAI EXECUTAR A AÇÃO ABAIXO SE O USER TIVER LOGADO
   res.render('dog-list', { dogs: dog});
};

async showDetails (req, res) {
    const { id } = req.params;
    const dogfiltrado = dog.filter(value => value.id == id);
    res.render('dog-details', { dogs: dogfiltrado[0]});
}

async deleteDog(req, res){
const { id } = req.params;
    res.send({id})
};

async updateDog(req, res){
    const { id } = req.params;
    res.send({id});
}


}

module.exports = { dogFunction };