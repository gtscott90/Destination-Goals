const express = require('express');

const app = express();

const router = express.Router();

//Login and Register: 

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.handlebars', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.handlebars')
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', 
  {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.handlebars')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
    //what is put after Body corresponds with "name=" field in Register
    try {
        // can hold hashedPassword in database
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        ////instead of pushing to Array, push to mySQL database
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword

        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    } console.log(users)
})

//Logout: 

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

//Check if use Authenticated or not: 

function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

