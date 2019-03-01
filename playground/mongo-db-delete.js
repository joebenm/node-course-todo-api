//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err){
    return console.log('Unable to connect Mongodb server');
}
console.log('Connected to the server');
const db=client.db('TodoApp');
db.collection('Users').deleteMany({name:"Joe"}).then((result)=>{
    console.log(result);
})

// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);
// })
// db.collection('Todos').deleteOne({text:"Somemore care"}).then((result)=>{
//     console.log(result);
// });
// db.collection('Todos').deleteMany({text:"Something to do"}).then((result)=>{
//     console.log(result);
// });

client.close();
//  db.close();
});