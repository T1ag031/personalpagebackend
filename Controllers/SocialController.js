const HistoryModel = require('../Models/HistoryModel.js');
const SocialModel = require('../Models/SocialModel.js');

const getSocials = async(req, res) => {
    try{
        const {social_id} = req.query;
        let result;

        if(!social_id){
            result = await SocialModel.getAllSocials();
        }else{
            result = await SocialModel.getSocialById({social_id});
        }

        const data = result.rows;

        if(result.rowCount > 0){
            return res.status(200).json({data});
        }else{
            return res.status(404).json({ message: "Nenhum utilizador encontrado.", success: false });
        }
    }catch(error){
        return { error: 'Erro: ' + error, success: false };
    }
}

const createSocial = async(req, res) => {
    try{
        const {name, description, url, me_id} = req.body;
        const result = await SocialModel.createSocial({name, description, url, me_id});
        const data = result.rows;

        if(result.rowCount > 0){
            return res.status(200).json({data});
        }else{
            return res.status(404).json({ message: "Erro ao criar Rede Social.", success: false });
        }
    }catch(error){
        return { error: 'Erro: ' + error, success: false };
    }
}

const updateSocial = async(req, res) => {
    try{
        const {social_id, name, description, url, me_id} = req.body;
        const result = await SocialModel.updateSocial({social_id, name, description, url, me_id});

        if(result.rowCount > 0){
            return res.status(200).json({data});
        }else{
            return res.status(404).json({ message: "Erro ao atualizar Rede Social.", success: false });
        }

    }catch(error){
        return { error: 'Erro: ' + error, success: false };
    }
}

const deleteSocial = async(req, res) => {
    try{
        const {social_id} = req.query;
        const result = await SocialModel.deleteSocial({social_id});

        if(result.rowCount > 0){
            return res.status(200).json({data});
        }else{
            return res.status(404).json({ message: "Erro ao apagar Rede Social.", success: false });
        }

    }catch(error){
        return { error: 'Erro: ' + error, success: false };
    }
}

module.exports = {getAllSocials, getSocialbyID, createSocial, updateSocial, deleteSocial};