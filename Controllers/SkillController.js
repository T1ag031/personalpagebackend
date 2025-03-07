const client = require('../db');

const getAllSkills = async(req, res) => {
    try{
        const query = 'SELECT s.skill_id, s.name, s.description, s.level, s.me_id, s.skill_type_id, st.name FROM skills s inner join skill_type st on st.skill_type_id = s-skill_type_id';
        const result = client.query(query);

        const skills = result.rows;

        if(skills.lenght === 0){
            return res.status(404).json({ message: 'Erro ao carregar dados.', success: false });
        }
        res.status(200).json({skills});
    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const getSkillbyID = async(req, res) => {
    try{
        const skill_id = req.params;

        const query = 'SELECT * FROM skill WHERE skill_id = $1';
        const values = [skill_id];

        const result = client.query(query, values);

        const skilltypes = result.rows;

        if(skilltypes.lenght === 0){
            return res.status(404).json({ message: 'Erro ao carregar dados.', success: false });
        }
        res.status(200).json({skilltypes});
    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const createSkill = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const updateSkill = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const deleteSkill = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

module.exports = {getAllSkills, getSkillbyID, createSkill, updateSkill, deleteSkill};