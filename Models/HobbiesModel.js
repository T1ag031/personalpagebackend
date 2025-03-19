const client = require('../db');

const HobbiesModel = {
    async getHobbies(){
        const sql = `SELECT * FROM hobbies`;

        try {
        const result = await client.query(sql);
        return result;
        } catch (error) {
        console.error("Erro ao carregar dados: ", error);
        throw error;
        }
    },
    async getHobbyByID({hobby_id}){
        const sql = `SELECT * FROM hobbies WHERE hobby_id=$1`;
        const values = [hobby_id];

        try {
        const result = await client.query(sql, values);
        return result;
        } catch (error) {
        console.error("Erro ao carregar dados: ", error);
        throw error;
        }
    },
    async createHobbie({name, description, me_id }) {
        const sql = `INSERT INTO hobbies(name, description, me_id)
                     VALUES ($1, $2, $3)`;
        const values = [ name, description, me_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao criar dados:", error);
            throw error;
        }
    },
    async updateHobby({hobby_id, name, description, me_id}){
        const sql = `UPDATE hobbies 
                    SET =$1, =$2, =$3
                    WHERE hobby_id=$4`;

        const values = [name, description, me_id, hobby_id];
        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar dados:", error);
            throw error;
        }
    },
    async deleteHobby({hobby_id}){
        const sql = `DELETE FROM hobbies
                    WHERE hobbie_id=$1`;

        const values = [hobby_id];
        try {
        const result = await client.query(sql, values);
        return result;
        } catch (error) {
        console.error("Erro ao apagar dados:", error);
        throw error;
        }
    }
}
module.exports = HobbiesModel;