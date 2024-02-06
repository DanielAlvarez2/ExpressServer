const express = require('express')
const app = express()

app.get('/',(request, response)=>{
    response.send('Express Server Listening')
})
app.listen(3000,()=>{
    console.log('Express Server Listening on port 3000');
})