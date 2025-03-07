const client = require('../db');

const getAllSkillTypes = async(req, res) => {
    try{
        const query = 'SELECT * FROM skill_type WHERE active = true';
        const result = client.query(query);

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

const getSkillTypebyID = async(req, res) => {
    try{
        const skill_type_id = req.params;

        const query = 'SELECT * FROM skill_type WHERE skill_type_id = $1 and active = true';
        const values = [skill_type_id];

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

const createSkillType = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const updateSkillType = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const deleteSkillType = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

module.exports = {getAllSkillTypes, getSkillTypebyID, createSkillType, updateSkillType, deleteSkillType};