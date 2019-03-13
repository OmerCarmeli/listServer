var express = require("express");
var router = express.Router();

var mongoDB = require("../DAL/mongoRepo");
var dbConfig= require("../Helpers/mongoDBconfig");
var jsonData=require("../mockData.json");
var mongoose = require('mongoose');


    var Schema=mongoose.Schema;
    var itemDataSchema= new Schema({
         _id:Number,
         imageUrl:String,
         product:String,
         price:String,
         inStock:Boolean
});

itemData=mongoose.model('itemData',itemDataSchema);

dbConfig.INIT();
router.get("/hello",function(req,res){
    //console.log(jsonData);
    jsonData.forEach(item => {
        var data=new itemData(item);
        data.save();
    });
    res.send("yes");
})
//get data
router.get("/getDataChunk/:index",function(req,res){
    index=req.params['index'];
    i=Number(index);
    console.log(i);
    itemData.find().skip(i).limit(10).then((doc)=>res.send(doc));
})
router.get("/getDataChunk1/:index",function(req,res){
    index=req.params['index'];
    i=Number(index);
    console.log(i);
    // if (i>20){
    //     i-=10;
    // }
    itemData.find().sort({_id:1}).skip(i).limit(20).then((doc)=>res.send(doc));
})

router.get("/getDataChunkSortedByProduct/:index",function(req,res){
    index=req.params['index'];
    i=Number(index);
    console.log(i);
    // if (i>20){
    //     i-=10;
    // }
    itemData.find().sort({product:1}).skip(i).limit(20).then((doc)=>res.send(doc));
})

router.post("/getOptions/",function (req,res){
    value=req.body.value;
    console.log(value)
    itemData.find({product: {$regex:value}}).limit(100).then((doc)=>res.send(doc))
});

router.get("/getDataChunkForSearch/:value",function(req,res){
    console.log(req)
    value=req.params['value'];
    itemData.find({product: {$regex:value}}).limit(20).then((doc)=>res.send(doc))
})



//add test
// router.post("/addTest", function(req, res) {
//   mainDB.addTest(req.body, data => {
//     res.json(data);
//   });
// });
// router.post("/addQuestion", function(req, res) {
//   mainDB.addQuestion(req.body, data => {
//     res.json(data);
//   });
// });

module.exports = router;