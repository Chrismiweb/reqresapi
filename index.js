const express = require('express');
const app = express();

const port = 2000;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/api/users", async(req, res)=>{
    const url = "https://reqres.in/api/users";

    const response = await fetch(url)
    .then(responseDate => responseDate.json())

    const users = response.data

   const ppl = users.map((user)=>{
        return {
            userId: user.id,
            email: user.email,
            fname: user.first_name,
            lname: user.last_name,
            pic: user.avatar
        }
    })

    res.json({"users": ppl})
})
app.listen(port , ()=>{
    console.log('port is running ' + port);
})