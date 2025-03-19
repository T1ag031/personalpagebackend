const SkillModel = require('../Models/SkillModel');

const SkillTypeController = {
    async getSkillTypes(req, res){
        try{
            const {skill_type_id} = req.query;
            let result;

            if(!skill_type_id){
                result = await SkillModel.getSkillTypes();
            }else{
                result = await SkillModel.getSkillTypebyId({skill_type_id});
            }
            const data = result.rows;

        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async createSkillType(req, res){
        try{
            const {name, description, user_id} = req.body;

            const result = await SkillModel.createSkillType({name, description});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "SKILL TYPE", new Date(), user_id);
                return res.status(200).json({ message: "Registo criado com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Erro ao criar", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    }
}

module.exports = SkillTypeController;