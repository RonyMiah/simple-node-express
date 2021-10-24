const express= require('express');
var cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json()); 





// Apadoto amra 3000 ditase pore amra [process.env.PORT||3000] aita use korbo 

const users = [
    {id:0, name:'mozno',email : 'mozno23@gmail.com', phone: '02343078739' },
    {id:1, name:'Popi ',email : 'popi@gmail.com', phone: '013323783739' },
    {id:2, name:'Nahid',email : 'nahid@gmail.com', phone: '0130783439' },
    {id:3, name:'Bolto',email : 'bolto@gmail.com', phone: '01307249739' },
    {id:4, name:'wifi beta',email : 'wifibeta@gmail.com', phone: '01307839739' },
]

// Data Gola kk load korbo amra load-data-react folder er maddome 

app.get('/',(req,res)=>{
    res.send("Hellow Boro i am listing Port 5000")
})

// Use Query Perametter 

app.get('/users',(req , res )=>{
    const search = req.query.search;
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
   
})

// App Mathoude 

app.post('/users' , (req, res) =>{
        const newUser =req.body;
        newUser.id=users.length;
         users.push(newUser)
        console.log('hitting The post ',req.body)
         res.json(newUser)
})

// Dynamic Api 

app.get('/users/:id',(req , res )=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    
})

app.listen(port,()=>{
    console.log('Listing Port');
})
