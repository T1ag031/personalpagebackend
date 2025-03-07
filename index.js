const express = require('express');
const cors = require('cors');
const { login, authenticateToken } = require('./login.js');
const {getMe, createMe, updateMe} = require('./Controllers/MeController.js')
const {getUsers, createUser, updateUser, deleteUser} = require('./Controllers/UserController.js');
const {getAllMovements} = require('./Controllers/HistoryController.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));
app.use(express.json());

//LOGIN
app.post('/login', login);

//HISTORY
app.get('/history', authenticateToken, getAllMovements);

//ME
app.get('/me', authenticateToken, getMe);
app.post('/me/create', authenticateToken, createMe);
app.put('/me/update',authenticateToken, updateMe);

//USERS
app.get('/users', authenticateToken, getUsers);
app.post('/users/create', authenticateToken, createUser);
app.put('/users/update',authenticateToken, updateUser);
app.delete('/users/delete',authenticateToken, deleteUser);

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