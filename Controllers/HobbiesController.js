const client = require('../db');

const getAllHobbies = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const getHobbiebyID = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const createHobbie = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const updateHobbie = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

const deleteHobbie = async(req, res) => {
    try{

    }catch(error){
        console.error('Erro:', error);
        return { error: 'Erro: ' + error, success: false };
    }
}

module.exports = {getAllHobbies, getHobbiebyID, createHobbie, updateHobbie, deleteHobbie};