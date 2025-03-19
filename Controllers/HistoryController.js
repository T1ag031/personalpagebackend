const HistoryModel = require('../Models/HistoryModel.js');

const HistoryController ={
    async getAllMovements(req, res){
        try{
            const {type} = req.query;
            let result;

            if(!type){
                result = await HistoryModel.getAllHistory();
            }else{
                result = await HistoryModel.getHistorybyType({type});
            }
            
            const data = result.rows;

            if(result.rowCount > 0){
                return res.status(200).json({data});
            }else{
                return res.status(404).json({ message: "Nenhum dado encontrado.", success: false });
            }
        }catch(error){
            return res.status(500).json({ message: "Erro ao carregar dados", success: false, error: error.message });
        }
    }
}

module.exports = HistoryController;