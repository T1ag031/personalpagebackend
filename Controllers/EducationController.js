const EducationModel = require('../Models/EducationModel');

const EducationController = {
    async getEducation(req, res){
        try{
            const {education_id} = req.query;
            let result;

            if(!education_id){
                result = await EducationModel.getEducation();
            }else{
                result = await EducationModel.getEducationByID({education_id});
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
    async createEducation(req, res){
        try{
            const { cycle, description, start_year, end_year, school, me_id, user_id} = req.body;

            const result = EducationModel.createEducation({cycle, description, start_year, end_year, school, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "EDUCATION", new Date(), user_id);
                return res.status(200).json({ message: "Educação criada com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Erro ao criar", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async updateEducation(req, res){
        try{
            const {education_id, cycle, description, start_year, end_year, school, me_id, user_id} = req.body;

            const result = EducationModel.updateEducation({education_id, cycle, description, start_year, end_year, school, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("PUT", "Atualização de Dados na BD", "EDUCATION", new Date(), user_id);
                return res.status(200).json({ message: "Atualizado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registro encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async deleteEducation(req, res){
        try{
            const {education_id, user_id} = req.query;

            const result = EducationModel.deleteEducation({education_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("DELETE", "Apagar Dados na BD", "EDUCATION", new Date(), user_id);
                return res.status(200).json({ message: "Apagado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registo encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    }
};

module.exports = EducationController;