import express from 'express';
import cors from 'cors';

let PORT = 5000;
const app = express(); 
app.use(express.json())
app.use(cors());

let users = [];
let tweets = [];

function userIsValid(name){
	for (let i=0; i<users.length; i++){
		if (name === users[i].username){
			return true;
		}
	}
	return false;
}

app.post("/sign-up", (req, res) => {
	const {username, avatar} = req.body;
	const newUser = {
		username,
		avatar
	};
	users.push(newUser);
	res.send("OK");
})

app.post("/tweets", (req, res) => {
	const {username, tweet} = req.body;

	if(userIsValid(username)){
		const newTweet = {
			username,
			tweet
		};
		tweets.push(newTweet);
		res.send("OK")
	}
	else {
		res.send("UNAUTHORIZED");
	}
})


// Inicia o servidor na porta 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


