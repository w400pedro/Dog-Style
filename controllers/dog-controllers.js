const dogs = require('../database/dogs-db');

class dogFunction {
async showDog(req, res){
   res.render('dog-list', { dogs: dogs });
};

async deleteDog(req, res){
const { id } = req.params;
    res.send({id})
};

async updateDog(req, res){
    const { id } = req.params;
    res.send({id});
}
async showProfile(req,res){
    const { userid } = req.params;
    res.send({userid});
}
}

module.exports = { dogFunction };