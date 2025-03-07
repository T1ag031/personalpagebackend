const client = require('../db');

const HistoryModel = {
    async getAllHistory() {
        const sql = `SELECT * FROM history`;
        try {
            const result = await client.query(sql);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async getHistorybyType({type}){
        const sql = `SELECT * FROM history
                     WHERE type =$1`;
        const values = [type];
        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async createMovement(type, description, table_name, date, user_id){
        const sql = `INSERT INTO history (type, description, table_name, date, user_id) 
                    VALUES ($1, $2, $3, $4, $5)`;
        const values = [type, description, table_name, date, user_id];
        try{
            const result = await client.query(sql, values);
            return result;
        }catch(error){
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    }
}

module.exports = HistoryModel;