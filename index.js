var express = require('express');
    app = express();
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res){
    res.sendFile('index.html')
});

app.use('/api/todos', todoRoutes);

app.listen(8080, function(){
    console.log('App is running running on port 8080')
});