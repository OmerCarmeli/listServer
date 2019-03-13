var express = require("express");
var app = express();
const cors=require('cors');
const bodyParser = require("body-parser");
var productRouter = require("./routes/productRouter");
//var sql = require("mssql");
//var config = require("./dbConfig");

// let corsOpstions={
//   origin:'http://localhost:4200',
//   optionSuccessStatus:200
// }
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//app.use(cors(corsOpstions));
// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type"
//       );
//       res.setHeader("Access-Control-Allow-Credentials", true);
//       next();
//     });
    
    //routes:
    //app.use('/testsapi', testsRouter);
    
    const corsOptions = {
      origin: 'http://localhost:4200',
      optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));
  app.use(bodyParser.urlencoded({
      extended: true
  }));
  app.use(bodyParser.json());

    var server = app.listen(4040,  err => {
      if (err) {
        console.log("error", "Error: " + err)
      }
      console.log("Server is running on port: " + server.address().port);
    });

    app.use('/product', productRouter);

   
