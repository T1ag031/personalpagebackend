const ProfessionalModel = require('../Models/ProfessionalModel');

const ProfessionalController = {
    async getProfessionalExp(req, res){
        try{
            const {professional_id} = req.query;
            let result;
            if(!professional_id){
                result = await ProfessionalModel.getProfessional();
            }else{
                result = await ProfessionalModel.getProfessionalByID({professional_id});
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
    async createProfessionalExp(req, res){
        try{
            const {name, description, company, start_date, end_date, me_id, user_id} = req.body;

            const result = await ProfessionalModel.createProfessional({name, description, company, start_date, end_date, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "PROFESSIONAL", new Date(), user_id);
                return res.status(200).json({ message: "Registo criado com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Erro ao criar", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async updateProfessionalExp(req, res){
        try{
            const {professional_id, name, description, company, start_date, end_date, me_id, user_id} = req.body;

            const result = await ProfessionalModel.updateProfessional({professional_id, name, description, company, start_date, end_date, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("PUT", "Atualização de Dados na BD", "PROFESSIONAL", new Date(), user_id);
                return res.status(200).json({ message: "Registo atualizado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registro encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async deleteProfessionalExp(req, res){
        try{
            const {professional_id, user_id} = req.query;

            const result = await ProfessionalModel.deleteProfessional({professional_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("DELETE", "Apagar Dados na BD", "PROFESSIONAL", new Date(), delete_user_id);
                return res.status(200).json({ message: "registo apagado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registo encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    }
}

module.exports = ProfessionalController;