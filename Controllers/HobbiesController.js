const HobbiesModel = require('../Models/HobbiesModel');

const HobbiesController = {
    async getHobbies(req, res){
        try{
            const {hobby_id} = req.query;
            let result;

            if(!hobby_id){
                result = await HobbiesModel.getHobbies();
            }else{
                result = await HobbiesModel.getHobbyByID({hobby_id});
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
    async createHobby(req, res){
        try{
            const {name, description, me_id, user_id} = req.body;

            const result = await HobbiesModel.createHobbie({name, description, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("POST", "Criação de Dados na BD", "HOBBIES", new Date(), user_id);
                return res.status(200).json({ message: "Hobby criado com sucesso", success: true});
            } else {
                return res.status(404).json({ message: "Erro ao criar Hobby", success: false });
            }

        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async updateHobby(req, res){
        try{
            const {hobby_id, name, description, me_id, user_id} = req.body;

            const result = await HobbiesModel.updateHobby({hobby_id, name, description, me_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("PUT", "Atualização de Dados na BD", "HOBBIES", new Date(), user_id);
                return res.status(200).json({ message: "Atualizado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registro encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    },
    async deleteHobby(req, res){
        try{
            const {hobby_id, user_id} = req.query;

            const result = await HobbiesModel.deleteHobby({hobby_id});

            if (result.rowCount > 0) {
                HistoryModel.createMovement("DELETE", "Apagar Dados na BD", "HOBBIES", new Date(), user_id);
                return res.status(200).json({ message: "Apagado com sucesso", success: true });
            } else {
                return res.status(404).json({ message: "Nenhum registo encontrado.", success: false });
            }
        }catch(error){
            return { error: 'Erro: ' + error, success: false };
        }
    }
}

module.exports = HobbiesController;