const SkillModel = require('../Models/SkillModel');

const SkillController = {
    async getSkills(req, res){
        try{
            const {skill_id} = req.query;
            let result;

            if(!skill_id){
                result = await SkillModel.getAllSkills();
            }else{
                result = await SkillModel.getSkillbyId([skill_id]);
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
    async createSkill(req, res){
        try{
            const {name, description, level, me_id, skill_type_id, user_id} = req.body;

            const result = await SkillModel.createSkill({name, description, level, me_id, skill_type_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "SKILLS", new Date(), user_id);
                return res.status(200).json({ message: "Registo criado com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Erro ao criar", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async updateSkill(req, res){
        try{
            const {skill_id, name, description, level, me_id, skill_type_id, user_id} = req.body;

            const result = await SkillModel.updateSkill({skill_id, name, description, level, me_id, skill_type_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("PUT", "Atualização de Dados na BD", "SKILLS", new Date(), user_id);
                return res.status(200).json({ message: "Registo atualizado com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Nenhum registro encontrado.", success: false });
            }

        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async deleteSkill(req, res){
        try{
            const {skill_id, user_id} = req.query;

            const result = await SkillModel.deleteSkill({skill_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("DELETE", "Apagar Dados na BD", "SKILLS", new Date(), user_id);
                return res.status(200).json({ message: "Apagado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registo encontrado.", success: false });
            }

        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    }
};

module.exports = SkillController; 