const db = require('../models')

module.exports = (app) => {
    app.get('/s', function(req,res){
        db.User.create({name: 'g', password: '123', email: 'jacqueline@gmail.com'})
        db.User.create({name: 'r', password: '123', email: 'joel@gmail.com'})
        db.User.create({name: 'e', password: '123', email: 'greg@gmail.com'})
        db.User.create({name: 'g', password: '123', email: 'kofi@gmail.com'})

        db.Goals.create({})
        db.Goals.create({})
        db.Goals.create({})
        db.Goals.create({})
        db.Goals.create({})
        db.Goals.create({}).then(response => {
            res.redirect('/')
        })
    })
}