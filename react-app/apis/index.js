const express = require('express')
const app = express()
const port = 3000

app.post('/api/v1/get-students1', (req, res) => {
	console.log("query method",req.query.grade);
  res.send('Students1')
})

app.post('/api/v1/get-students2', (req, res) => {
	console.log("body method",req.body)
  res.send('Students2');
})


app.post('/api/v1/get-students3', (req, res) => {
	console.log(req)
  res.send('Students3');
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})