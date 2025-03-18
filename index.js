const express = require('express');
const cors = require('cors');
const Login = require('./routes/loginRoutes')
const User = require('./routes/userRoutes');
const Me = require('./routes/meRoutes');


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
//app.use('/history', authenticateToken, getAllMovements);

//ME
app.use('/me', Me);

//USERS
app.use('/users', User);

//USERTYPE
/*app.get('/users/types', authenticateToken, getAllUserTypes);
app.get('/users/types/:user_type_id', authenticateToken, getUserTypebyId);*/

//SKILLS
/*app.get('/skills', authenticateToken, getAllSkills);
app.get('/skills/:skill_id', authenticateToken, getSkillbyID);
app.post('/skills/create', authenticateToken, createSkill);
app.put('/skills/update', authenticateToken, updateSkill);
app.delete('/skills/delete/:skill_id', authenticateToken, deleteSkill);*/

//SKILLTYPE

//EDUCATION

//HOBBIES

//SOCIAL

//PROFESSIONAL


app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});