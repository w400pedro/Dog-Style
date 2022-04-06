const { stringify } = require("nodemon/lib/utils");





class dogFunction {
async showDog(req, res){
   return res.render('dog-list');
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