const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();
app.use(cors());    
app.use(express.json());
app.use(routes);
//app.use(routes);
//app.listen(3001);
const port = 3001;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});
//const db = require('./database');

//app.get('/usuario', db.getUsuarios);
//app.post('/usuario', db.addUsuario);
//app.put('/usuario', db.atualizarUsuario);
//app.delete('/usuario/:id', db.deletarUsuario);