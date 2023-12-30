import express from "express";
import bodyParser from "body-parser";
import $ from 'jquery';

const app = express();
const port = 3000;
var x = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.get("/update", (req, res) => {
    res.render("update.ejs",{pinakas:x});

  });

  app.get("/view", (req, res) => {
    res.render("view.ejs",{pinakas:x});
    
  });

  app.get("/delete", (req, res) => {
    res.render("delete.ejs",{pinakas:x});

  });

  app.post("/delete", (req, res,next) => {

    var x1 = req.body.inv1+req.body.inv2;
    x1 = x1.replace("&","").replace(/\s/g, '');

    for(var i = 0;i<x.length;i++){
      var x2 = x[i].replace("&","").replace(/\s/g, '');


      if(x1===x2){
        x.splice(i,1);
      }


    }

    res.redirect("/delete");


  });

  app.post("/create",(req,res)=>{


    x.push(req.body.titletext+"&"+req.body.maintext);
    res.redirect("/");

  });

  app.post("/update",(req,res,next)=>{

    var x1 = req.body.inv1+req.body.inv2;
    x1 = x1.replace("&","").replace(/\s/g, '');

    for(var i = 0;i<x.length;i++){
      var x2 = x[i].replace("&","").replace(/\s/g, '');


      if(x1===x2){
        x[i] = req.body.titletext+"&"+req.body.maintext;

      }




    }

    res.redirect("/delete");

  

  });




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});