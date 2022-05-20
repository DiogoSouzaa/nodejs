express = require('express');
path = require('path');
mustache = require('mustache-express');
mainRoutes = require('./routes/index');


const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, 'public')));

server.use(express.urlencoded({extended: true}));


server.use('/', mainRoutes);

server.use((req, res)=>{
    res.status(404).send('Página não encontrada!');
});


server.listen(80);

