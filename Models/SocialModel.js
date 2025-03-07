const client = require('../db');

const SocialModel = {
    async getAllSocials(){
        const sql = `SELECT * FROM social ORDER BY social_id`;
        try {
            const result = await client.query(sql);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    }, 

    async getSocialById({social_id}){
        const sql = `SELECT * FROM social
                    WHERE social_id = $1`;

        const values = [social_id];
        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async createSocial({name, description, url, me_id}){
        const sql = `INSERT INTO social(name, description, url, me_id)
                    VALUES ($1, $2, $3, $4)`;
        const values = [name, description, url, me_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao criar Rede Social: ", error);
            throw error;
        }
    },

    async updateSocial({social_id, name, description, url, me_id}){
        const sql = `UPDATE social SET name = $1, description = $2, url = $3, me_id = $4
                        WHERE social_id = $5`;
        const values = [name, description, url, me_id, social_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar Rede Social: ", error);
            throw error;
        }
    },

    async deleteSocial({social_id}){
        const sql = `DELETE FROM social
                        WHERE social_id = $1`;
        const values = [social_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao apagar dados: ", error);
            throw error;
        }
    }
}

module.exports = SocialModel;