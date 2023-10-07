const express = require('express');
const app = express();
const port = 3000;
var pool = require('./queries.js');

app.get('/', (req, res)=>{
  pool.query('SELECT * FROM actor',(err, result)=>{
    if (err){
      throw err;
    }
    res.send(result.rows);
  });
});
app.post('/',function (req, res){
  res.send('Hello Alfridus!!! From post')
});

app.put('/',function (req, res){
  res.send('Hello Alfridus!!! From put')
});

pool.connect((err, res)=>{
    console.log(err)
    console.log('connect')
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
