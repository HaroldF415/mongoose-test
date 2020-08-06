//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Peach",
  rating: 10,
  review: "I LOVE PEACHES!."
});

// fruit.save(); // -- this is to save a single document in the database
//
// const apple = new Fruit({
//   name: "Apple",
//   rating: 6,
//   review: "Pretty solid for an apple."
// });
//
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "Love their sour taste. But eating too many hurts my tounge."
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "I love them when they are sweet and juicy."
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 7,
//   review: "Don't like them when they are of sandy texture."
// });
//
// Fruit.insertMany([apple, kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits boii!!");
//   }
// });
//
// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else{
//     fruits.forEach(function(fruit){
//         console.log(fruit.name);
//      });
//      mongoose.connection.close();
//   }
//
// });
//
// Fruit.updateOne({_id:"5f0a33f4bcec993534f9e1d9"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the document.");
//   }
// });
//
// Fruit.deleteOne({_id:"5f0a33f4bcec993534f9e1d9"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted the document.");
//   }
// });


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// This fruit was saved for Amaranta
// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Love pineapple juice."
// });
//
// pineapple.save();
//
// Person.deleteOne({_id:"5f0a3810a60bc24574cf0b45"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted the document.");
//   }
// });
//
// const person = new Person({
//   name: "Harold",
//   age: 31
// });
//
// person.save(function(err){
//   if(err)
//     console.log(err);
//   else
//   console.log("Documented added successfully.");
// });
//
// Created a new fruit that will be updated inside a document: John
// const lime = new Fruit({
//   name: "Lime",
//   score: 10,
//   review: "Limeade > Lemonade."
// });
//
// lime.save();
//
// The person that will be updated is: John and it will be given a new fruit document: lime
// Person.updateOne({_id:"5f0a436d2b76140a305343d0"}, {favoriteFruit: lime}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the document. With their favorite fruit.");
//     mongoose.connection.close();
//   }
// });
//
// const person = new Person({
//   name: "Amaranta",
//   age: 31,
//   favoriteFruit: pineapple
// });

// person.save();

// person.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Document added successfully!");
//   }
// });

// Person.deleteMany({name: "John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted the document/s");
//   }
// });
