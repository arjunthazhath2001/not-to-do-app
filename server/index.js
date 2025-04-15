const express= require('express')
const cors= require('cors')
const app= express()
app.use(cors())
app.use(express.json())
require('dotenv').config()

const {Client}= require('pg')

const client= new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

console.log(process.env.DB_NAME,process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_PORT)

client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});



app.get('/todos',async (req,res)=>{
    
    try{
    const todos= await client.query('SELECT * FROM todos ORDER BY createdAt DESC;')
    
    if(todos){
        res.json({todos: todos.rows})
    } } catch(e){
        res.json("could not fetch")
    }
    
})


app.post('/todos',async(req,res)=>{
    const title= req.body.title;
    console.log(title)

    try{
    const created= await client.query(`INSERT INTO todos(title) VALUES ($1) RETURNING id`,[title])
    
    res.json("successfully created")
        
    } 
    catch(error){
        res.json("could not create an entry",error)
    }

})


app.put('/todos/:id',async(req,res)=>{
    const id= req.params.id
    const title= req.body.title

    try{
        const modified= await client.query(`UPDATE todos SET title=($1) WHERE id=($2)`,[title,id])


    if(modified){
        res.json("modified")
    }} catch(e){
        res.json("couldnt modify try later")
    }

    
})


app.delete('/todos/:id',async(req,res)=>{
    const id= req.params.id
    try{
    const deleted= await client.query(`DELETE FROM todos WHERE id=($1)`,[id])
    if(deleted){
        res.json("deleted")
    }} catch(e){
        res.json("some error")
    }
})


app.listen(3001)