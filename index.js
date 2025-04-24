const express = require('express')
const app = express()
const port = 3000


const { createClient } = require ('@supabase/supabase-js')

const supabaseUrl = 'https://zzfrbvhfvxdfeuotcdnh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6ZnJidmhmdnhkZmV1b3RjZG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NjU1MDIsImV4cCI6MjA0ODA0MTUwMn0.kupSy-3Qwqm1CYCXVCxKYFkrDFzv3ghhTEERREpxhLc'
const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/advertisment_types', async (req, res) => {
       
    const { data, error } = await supabase
  .from('advertisment_types')
  .select()
    res.send(data);
    })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});