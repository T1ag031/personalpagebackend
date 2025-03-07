const UserModel = require('./../Models/UserModel.js');
const HistoryModel = require('../Models/HistoryModel.js');

const UserController ={
    async getUsers(req, res){
        try{
            const {user_id, active} = req.query;
            let result;
            let data;
            
            if (!user_id && active){
                result = await UserModel.getActiveUsers();
            }else if(user_id){
                result = await UserModel.getUserbyId({user_id});
            }else{
                result = await UserModel.getAllUsers();
            }

            data = result.rows;
            if(result.rowCount > 0){
                return res.status(200).json({data});
            }else{
                return res.status(404).json({ message: "Nenhum utilizador encontrado.", success: false });
            }
        }catch(error){
            return res.status(500).json({ message: "Erro ao carregar dados", success: false, error: error.message });
        }
    },

    async createUser(req, res){
        try {
            const { nome, email, username, password, user_type_id, create_user_id} = req.body;
    
            //if (!user_id) return res.status(400).json({ message: "O campo 'user_id' é obrigatório", success: false });
            
            const result = await UserModel.createUser({nome, email, username, password, user_type_id});
    
            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "USER", new Date(), create_user_id);
                return res.status(200).json({ message: "Utilizador criado com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Erro ao criar utilizador", success: false });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar utilizador", success: false, error: error.message });
        }
    },

    async updateUser(req, res){
        try {
            const {user_id, nome, email, username, password, user_type_id, create_user_id} = req.body;
    
            if (!user_id) return res.status(400).json({ message: "O campo 'user_id' é obrigatório", success: false });
    
            const result = await UserModel.updateUser({ user_id, nome, email, username, password, user_type_id});
            
            if (result.rowCount > 0) {
                HistoryModel.createMovement("PUT", "Atualização de Dados na BD", "USER", new Date(), create_user_id);
                return res.status(200).json({ message: "Atualizado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registro encontrado para atualizar", success: false });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar utilizador", success: false, error: error.message });
        }
    },

    async deleteUser(req, res){
        try {
            const {user_id, delete_user_id} = req.query;
    
            if (!user_id) return res.status(400).json({ message: "O campo 'user_id' é obrigatório", success: false });
    
            const result = await UserModel.deleteUser({ user_id});

            console.log(result);

            if (result.rowCount > 0) {
                HistoryModel.createMovement("DELETE", "Apagar Dados na BD", "USER", new Date(), delete_user_id);
                return res.status(200).json({ message: "Utilizador apagado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum utilizador encontrado.", success: false });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao apagar utilizador", success: false, error: error.message });
        }
    }
}

module.exports = UserController;