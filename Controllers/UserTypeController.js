const UserModel = require('./../Models/UserModel.js');
const HistoryModel = require('./../Models/HistoryModel');

const UserTypeController = {
    async getUserTypes(req,res){
        try{
            const {user_type_id} = req.query;
            let result;
            if(!user_type_id){
               result = await UserModel.getUserTypes();
            }else{
                result = await UserModel.getUserTypebyId({user_type_id});
            }
            
            const data = result.rows;

            if(result.rowCount > 0){
                return res.status(200).json({data});
            }else{
                return res.status(404).json({ message: "Nenhum utilizador encontrado.", success: false });
            }
        }catch(error){
            return res.status(500).json({ message: "Erro ao carregar dados.", success: false, error: error.message });
        }
    },

    async createUserType(req, res){
        try{
            const {name, user_id} = req.body;
            
            const result = await UserModel.createUserType({name});
            const data = result.rows;

            if(result.rowCount > 0){
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "USER TYPE", new Date(), user_id);
                return res.status(200).json({data});
            }else{
                return res.status(404).json({ message: "Erro ao criar Tipo de Utilizador.", success: false });
            }
        }catch(error){
            return res.status(500).json({ message: "Erro ao carregar dados.", success: false, error: error.message });
        }
    }
}

module.exports = UserTypeController;