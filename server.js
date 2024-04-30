const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/',(request, response)=>{
    response.send(`Express Server Listening on port ${PORT}!`)
})
app.listen(PORT,()=>{
    console.log(`Express Server Now Listening on port ${PORT}`);
})