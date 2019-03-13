var mongoose = require('mongoose');

function INIT(){

    mongoose.connect("mongodb+srv://superAdmin:q1w2e3r4@listexercisecluster-inilc.gcp.mongodb.net/test?retryWrites=true");
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("connect to DB")
    });
}
module.exports = {INIT};
