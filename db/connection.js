var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var passportLocalMongoose = require('passport-local-mongoose');

var TagSchema = mongoose.Schema(
    {
    name: String
    }
);

mongoose.model('Tag', TagSchema);

var EthnicitySchema = mongoose.Schema(
    {
    name: String
    }
);

mongoose.model('Ethnicity', TagSchema);

var DishSchema = mongoose.Schema(
    {
    name: { type : String, required : true },
    ingredients: Array,
    tags: [TagSchema],
    ethnicities: [EthnicitySchema],
    price: { type : Number, required : true },
    portion: { type : Number, required : true },
    quantity: { type : Number, required : true },
    description: { type : String, required : true }
    }
);

mongoose.model('Dish', DishSchema);

var AccountSchema = mongoose.Schema(
    {
    username: String,
    email: String,
    password: String,
    name: String,
    zip_code: Number,
    chef: Boolean,
    ethnicities: [EthnicitySchema],
    dishes: [DishSchema]
    }
);

AccountSchema.plugin(passportLocalMongoose);

mongoose.model('Account', AccountSchema);

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});
db.once('open', function() {
  console.log("Connected to MongoDB!");
});

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect("mongodb://localhost/chezcasa");
}


module.exports = mongoose;
