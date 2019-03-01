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
db.collection('Todos').insertOne({
    text:"Something to do",
    completed:false
},(err,result)=>{
    if(err){
        return  console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
});

// db.collection('Todos').insertOne({
//     // _id:123,
//     name:"Joe",
//     age:"25",
//     location:"Kochi"
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert todo',err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
// });
client.close();
});