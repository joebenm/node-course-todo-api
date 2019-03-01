//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
// var obj=new ObjectID();
// console.log(obj);
// var user={name:'Joe',text:'Hey some text'};
// var {name,text}=user;
// console.log(name+text);



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err){
    return console.log('Unable to connect Mongodb server');
}
console.log('Connected to the server');
const db=client.db('TodoApp');
db.collection('Todos').find({name:"Joe"}).toArray().then((docs)=>{
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
     console.log('Unable to fetch todos',err);
})

// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Todos count:${count}`);
//    // console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//      console.log('Unable to fetch todos',err);
// })
client.close();
//  db.close();
});