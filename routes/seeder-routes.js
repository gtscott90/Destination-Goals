const db = require('../models')

module.exports = (app) => {
    app.get('/s', function(req,res){
        db.User.create({name: 's', password: '123', email: 'test@gmail.com'})
        db.User.create({name: 's', password: '123', email: 'test@gmail.com'})
        db.User.create({name: 's', password: '123', email: 'test@gmail.com'})
        db.User.create({name: 's', password: '123', email: 'test@gmail.com'})

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