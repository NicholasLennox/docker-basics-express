const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    // If production, write a message, if development, write another
    if(process.env.NODE_ENV === 'production') {
        res.json({message: 'Running in production'})
    } else {
        res.json({message: 'Running in development'})
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})