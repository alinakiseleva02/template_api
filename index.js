const express = require('express')
const app = express()
const port = 3000


const { createClient } = require ('@supabase/supabase-js')

const supabaseUrl = 'https://ebfpllkgtaxgrqxjlclq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZnBsbGtndGF4Z3JxeGpsY2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODEwMTcsImV4cCI6MjA2MDM1NzAxN30.tYaiFSq9GdJDexYSRTS50Cu_V0c4WFg-KkeFGAhcy4Y'
const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/students', (req, res) => {
        res.send('Список студентов');
    })

    app.post('/students', (req, res) => {
        res.send('Добавление студентов');
    })

    app.put('/students', (req, res) => {
        res.send('Изменение студента');
    })

    app.delete('/students', (req, res) => {
        res.send('У студента');
    })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});