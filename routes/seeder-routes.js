const db = require('../models')

module.exports = (app) => {
    app.get('/s', function(req,res){
        db.User.create({name: 'g', password: '123', email: 'jacqueline@gmail.com'})
        db.User.create({name: 'r', password: '123', email: 'joel@gmail.com'})
        db.User.create({name: 'e', password: '123', email: 'greg@gmail.com'})
        db.User.create({name: 'g', password: '123', email: 'kofi@gmail.com'})

        db.Goals.create({goalName: "Play Piano", frequency: 1, createdAt: CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP})
        db.Goals.create({goalName: "Learn Spanish", frequency: 3, createdAt: CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP})
        db.Goals.create({goalName: "Bake Homemade Bread", frequency: 4, createdAt: CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP})
        db.Goals.create({goalName: "Learn to Make a Web Page", frequency: 4, CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP)})
        db.Goals.create({})
        db.Goals.create({}).then(response => {
            res.redirect('/')
        })
    })
}

/* INSERT INTO Goals (goalName, frequency, createdAt, updatedAt) VALUES (goalName: "Play Piano", frequency: 1, createdAt: CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName, frequency, createdAt, updatedAt) VALUES (goalName: "Learn Spanish", frequency: 3, createdAt: CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName, frequency, createdAt, updatedAt) VALUES (goalName: "Bake Homemade Bread", frequency: 4, createdAt: CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName, frequency, createdAt, updatedAt) VALUES (goalName: "Learn to Make a Web Page", frequency: 4, CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP);
INSERT INTO Goals (goalName, frequency, createdAt, updatedAt) VALUES (goalName: "Learn to Sing", frequency: 5, createdAt: CURRENT_TIMESTAMP, updatedAt: CURRENT_TIMESTAMP); */