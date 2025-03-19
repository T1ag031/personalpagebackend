const SocialModel = require('./../Models/SocialModel');

const SocialController = {
    async getSocials(req, res){
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
                return res.status(404).json({ message: "Nenhum registo encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async createSocial(req, res){
        try{
            const {name, description, url, me_id, user_id} = req.body;

            const result = await SocialModel.createSocial({name, description, url, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "SOCIAL", new Date(), user_id);
                return res.status(200).json({ message: "Registo criado com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Erro ao criar", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async updateSocial(req, res){
        try{
            const {social_id, name, description, url, me_id, user_id} = req.body;

            const result = await SocialModel.updateSocial({social_id, name, description, url, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("PUT", "Atualização de Dados na BD", "SOCIAL", new Date(), user_id);
                return res.status(200).json({ message: "registo atualizado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registro encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async deleteSocial(req, res){
        try{
            const {social_id, user_id} = req.query;

            const result = await SocialModel.deleteSocial({social_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("DELETE", "Apagar Dados na BD", "SOCIAL", new Date(), user_id);
                return res.status(200).json({ message: "Registo apagado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registo encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    }
};

module.exports = SocialController; 