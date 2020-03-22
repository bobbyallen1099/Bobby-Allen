const path = require('path')
const express = require('express')

const app = express(),
    DIST_DIR = __dirname,
    HOME = path.join(DIST_DIR, 'dist/index.html'),
    ABOUT = path.join(DIST_DIR, 'dist/about.html'),
    WORK = path.join(DIST_DIR, 'dist/work.html'),
    CONTACT = path.join(DIST_DIR, 'dist/contact.html')

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
    res.sendFile(HOME)
})
app.get('/about', (req, res) => {
    res.sendFile(ABOUT)
})
app.get('/work', (req, res) => {
    res.sendFile(WORK)
})
app.get('/contact', (req, res) => {
    res.sendFile(CONTACT)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})