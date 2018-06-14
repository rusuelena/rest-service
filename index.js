const express = require("express");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

const app = express();

const sequelize = new Sequelize("facultate", "root", "", {
    dialect:"mysql"
});

const Student = sequelize.define("student",{
    nume:Sequelize.STRING

})

const Curs = sequelize.define("curs", {
    denumire:Sequelize.STRING
})

const Catalog = sequelize.define("catalog", {
})


app.use(bodyParser.json());

Student.hasMany(Catalog);
Curs.hasMany(Catalog);

app.get("/create",function(req, res, next){
    sequelize.sync().then(function(){
        res.status(201).send("Tabele create!")
    }).catch(function(error){
        console.log(error)
    })
})

app.post("/students", function(req, res, next){
    Student.create(req.body).then(function(){
        res.status(201).send("Student created!");
    }).catch(function(error){
        console.log(error);
        next();
    })
})

app.get("/students", function(req, res, next){
    Student.findAll().then(function(studenti){
        res.status(200).json(studenti);
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.put("/students/:id",function(req, res, next){
    Student.findById(req.params.id).then(function(student){
        if(student!=null){
            return student.update(req.body)
        }else{
            res.status(404).send("Studentul cu acest id nu exista!");
        }
    }).then(function(){
        res.status(201).send("Student updated!");
    }).catch(function(error){
        console.log(error)
         next();
    })
} )

app.get("/students/:id", function(req, res, next){
    Student.findById(req.params.id).then(function(student){
        if(student!=null){
            res.status(200).json(student);
        }else{
            res.status(404).send("Studentul cu acest id nu exista");
        }
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.delete("/students/:id", function(req, res, next){
    Student.findById(req.params.id).then(function(student){
        if(student!=null){
            return student.destroy();
        }else{
            res.status(404).send("Studentul cu acest id nu exista!");
        }
    }).then(function(){
        res.status(200).send("Studentul a fost sters!");
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.post("/curs", function(req, res, next){
    Curs.create(req.body).then(function(){
        res.status(201).send("Curs creat!");
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.get("/curs", function(req, res, next){
    Curs.findAll().then(function(cursuri){
        res.status(200).json(cursuri);
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.get("/curs/:id", function(req, res, next){
    Curs.findById(req.params.id).then(function(curs){
        if(curs!=null){
            res.status(200).json(curs);
        }else{
            res.status(404).send("Cursul nu a fost gasit!");
        }
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.put("/curs/:id", function(req, res, next){
    Curs.findById(req.params.id).then(function(curs){
        if(curs!=null){
            return curs.update(req.body);
        }else{
             res.status(404).send("Cursul nu a fost gasit!");
        }
    }).then(function(){
        res.status(201).send("Cursul a fost actualizat!");
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.delete("/curs/:id", function(req, res, next){
    Curs.findById(req.params.id).then(function(curs){
        if(curs!=null){
            return curs.destroy();
        }else{
            res.status(404).send("Cursul nu a fost gasit!");
        }
    }).then(function(){
        res.status(201).send("Cursul a fost sters!");
    }).catch(function(error){
        console.log(error);
         next();
    })
})

app.use(function(req, res, next){
    res.status(500).send("Server error!");
})

app.listen(8080);