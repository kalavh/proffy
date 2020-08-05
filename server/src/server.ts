import express from 'express'
const app = express(); 


app.get('/users' ,(req,res) => {
    const users = [
        {name: 'Jefferson',age:21},
        {name: 'Gloria',age:43}
    ]
    return res.json(users)
})

app.listen(3333);