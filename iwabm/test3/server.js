// import 'express' package
const express = require('express');
//var unirest = require('unirest');

// create express server
const app = express();



//app.use(bodyParser.urlencoded({ extended: true }));

// listen on port 8000
app.listen(8000, () => {
  console.log('We are live on 8000');
});

// server all the front-end files from the 'static' folder
app.use(express.static('static'))


app.get('/', (req, res) => {
	res.send('Hello!');
});

app.get('/users/:id', (req, res) => {
	res.send('These are the users:' + req.params.id);
	// const user = db.getUser(id)

});

 app.post('/emotion', (req, res) => {
 	res.send('You requested emotions for the API');
 	// call emotion api here, receive the response and send it to your client.
	


// });




});
