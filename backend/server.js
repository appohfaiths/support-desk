const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4500

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the support desk api'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

