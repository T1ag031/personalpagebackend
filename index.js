const express = require('express');
const cors = require('cors');
const Login = require('./routes/loginRoutes')
const User = require('./routes/userRoutes');
const Me = require('./routes/meRoutes');
const History = require('./routes/historyRoutes');
const Social = require('./routes/socialRoutes');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));
app.use(express.json());

//LOGIN
app.use('/login', Login);

//HISTORY
app.use('/history', History);

//ME
app.use('/me', Me);

//USERS
app.use('/users', User);

//USERTYPE

//SKILLS

//SKILLTYPE

//EDUCATION

//HOBBIES

//SOCIAL
app.use('/socials', Social);
//PROFESSIONAL


app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});