const express = require('express');
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

// app.get("/", (req, res) =>{
//     res.render("index")
// });

app.get("/", (req, res) => {
    res.send(req.get('User-Agent'));
  });

app.listen(3000, ()=> console.log("listening on port 3000"));