const MeModel = require('./../Models/MeModel.js');
const HistoryModel = require('../Models/HistoryModel.js');

const MeController = {
    async getMe(req, res){
        try{
            const {me_id} = req.query;
            const result = await MeModel.getMe({me_id});

            const data = result.rows;

            if(result.rowCount > 0){
                return res.status(200).json({data});
            }else{
                return res.status(404).json({ message: "Nenhum dado encontrado.", success: false });
            }
        }catch(error){
            return res.status(500).json({ message: "Erro ao carregar dados", success: false, error: error.message });
        }
    },

    async createMe(req, res){
        try {
            const { profile_image, first_name, last_name, email, phone_number, birth_date, user_id} = req.body;
    
            if (!user_id) return res.status(400).json({ message: "O campo 'user_id' é obrigatório", success: false });
    
            const result = await MeModel.createMe({ profile_image, first_name, last_name, email, phone_number, birth_date});
    
            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "ME", new Date(), user_id);
                return res.status(200).json({ message: "Criado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Erro ao criar utilizador", success: false });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar", success: false, error: error.message });
        }
    },

    async updateMe(req, res){
        try {
            const {me_id, profile_image, first_name, last_name, email, phone_number, birth_date, user_id} = req.body;
    
            if (!user_id) return res.status(400).json({ message: "O campo 'user_id' é obrigatório", success: false });
            if (!me_id) return res.status(400).json({ message: "O campo 'me_id' é obrigatório", success: false });
                
            const result = await MeModel.updateMe({me_id, profile_image, first_name, last_name, email, phone_number, birth_date});
    
            if (result.rowCount > 0) {
                HistoryModel.createMovement("PUT", "Atualização de Dados na BD", "ME", new Date(), user_id);
                return res.status(200).json({ message: "Atualizado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registro encontrado para atualizar", success: false });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar", success: false, error: error.message });
        }
    },
}

module.exports = MeController;