import express from 'express';
import cors from 'cors';

let PORT = 5000;
const app = express(); 
app.use(express.json())
app.use(cors());

let users = [];

let tweets = [];

app.post("/sign-up", (req, res) => {
	const {username, avatar} = req.params;
	const newUser = {
		username,
		avatar
	};
	users.push(newUser);
	res.send("OK");
})

// Inicia o servidor na porta 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


