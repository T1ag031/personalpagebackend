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
        const sql = `SELECT * FROM hobbies WHERE hobbie_id=$1`;
        const values = [hobby_id];

        try {
        const result = await client.query(sql, values);
        return result;
        } catch (error) {
        console.error("Erro ao carregar dados: ", error);
        throw error;
        }
    },
    async createEducation({ cycle, description, start_year, end_year, school, me_id}) {
        const sql = `INSERT INTO education( cycle, description, start_year, end_year, school, me_id)
                     VALUES ($1, $2, $3, $4, $5, $6)`;
        const values = [ cycle, description, start_year, end_year, school, me_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao criar dados:", error);
            throw error;
        }
    },
    async updateEducation({education_id , cycle, description, start_year, end_year, school, me_id}){
        const sql = `UPDATE education 
                    SET cycle=$1, description=$2, start_year=$3, end_year=$4, school=$5, me_id=$6
                    WHERE education_id=$7`;

        const values = [ cycle, description, start_year, end_year, school, me_id, education_id];
        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar dados:", error);
            throw error;
        }
    },
    async deleteEducation({professional_id}){
        const sql = `DELETE FROM education
                    WHERE education_id=$1`;

        const values = [professional_id];
        try {
        const result = await client.query(sql, values);
        return result;
        } catch (error) {
        console.error("Erro ao apagar dados:", error);
        throw error;
        }
    }
}
module.exports = ProfessionalModel;