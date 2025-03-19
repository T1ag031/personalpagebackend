const client = require('../db');

const ProfessionalModel = {
    async getProfessional(){
        const sql = `SELECT * FROM professional`;

        try {
        const result = await client.query(sql);
        return result;
        } catch (error) {
        console.error("Erro ao carregar dados: ", error);
        throw error;
        }
    },
    async getProfessionalByID({professional_id}){
        const sql = `SELECT * FROM professional 
                        WHERE professional_id=$1`;
        const values = [professional_id];

        try {
        const result = await client.query(sql, values);
        return result;
        } catch (error) {
        console.error("Erro ao carregar dados: ", error);
        throw error;
        }
    },
    async createProfessional({ name, description, company, start_date, end_date, me_id}) {
        const sql = `INSERT INTO professional(name, description, company, start_date, end_date, me_id)
                     VALUES ($1, $2, $3, $4, $5, $6)`;
        const values = [name, description, company, start_date, end_date, me_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao criar dados:", error);
            throw error;
        }
    },
    async updateProfessional({professional_id ,nome, description, company, start_date, end_date, me_id}){
        const sql = `UPDATE professional 
                    SET name=$1, description=$2, company=$3, start_date=$4, end_date=$5, me_id=$6
                    WHERE professional_id=$7`;

        const values = [nome, description, company, start_date, end_date, me_id, professional_id];
        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar dados:", error);
            throw error;
        }
    },
    async deleteProfessional({professional_id}){
        const sql = `DELETE FROM professional
                    WHERE professional_id=$1`;

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