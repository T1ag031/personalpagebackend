const client = require('../db');

const MeModel = {
    async getMe({me_id}){
        const sql = `SELECT *
                     FROM me
                     WHERE me_id = $1`;

        const values = [me_id];       
        try {
            
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async createMe({ profile_image, first_name, last_name, email, phone_number, birth_date}) {

        const sql = `INSERT INTO me(profile_image, first_name, last_name, email, phone_number, birth_date)
                     VALUES ($1, $2, $3, $4, $5, $6)`;
        const values = [profile_image, first_name, last_name, email, phone_number, birth_date];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao criar:", error);
            throw error;
        }
    },

    async updateMe({ me_id, profile_image, first_name, last_name, email, phone_number, birth_date}) {
        const sql = `
            UPDATE me 
            SET profile_image = $1, first_name = $2, last_name = $3, email = $4, phone_number = $5, birth_date = $6
            WHERE me_id = $7;
        `;
        const values = [ profile_image, first_name, last_name, email, phone_number, birth_date, me_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar utilizador:", error);
            throw error;
        }
    },

    async deleteMe({ me_id }) {
        const sql = `
            UPDATE me 
            SET active = false
            WHERE me_id = $1;
        `;
        const values = [me_id];

        try {
            //const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao apagar:", error);
            throw error;
        }
    }
}

module.exports = MeModel;