const client = require('../db');

const UserModel = {
    async getActiveUsers(){
        const sql = `SELECT u.user_id, u.nome, u.email, u.username, u.active, u.user_type_id, ut.name as user_type
                     FROM "user" u 
                     INNER JOIN usertype ut ON ut.user_type_id = u.user_type_id
                     WHERE u.active = true
                     ORDER BY u.user_id`;

        try {
            const result = await client.query(sql);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async getAllUsers(){
        const sql = `SELECT u.user_id, u.nome, u.email, u.username, u.active, u.user_type_id, ut.name as user_type
                     FROM "user" u 
                     INNER JOIN usertype ut ON ut.user_type_id = u.user_type_id
                     ORDER BY u.user_id`;

        try {
            const result = await client.query(sql);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async getUserbyId({user_id}){
        const sql = `SELECT u.user_id, u.nome, u.email, u.username, u.active, u.user_type_id, ut.name as user_type
                     FROM "user" u 
                     INNER JOIN usertype ut ON ut.user_type_id = u.user_type_id
                     WHERE u.user_id= $1
                     ORDER BY u.user_id`;
        const values = [user_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async createUser({ nome, email, username, password, user_type_id}) {
        const sql = `INSERT INTO "user"(nome, email, username, password, user_type_id)
                     VALUES ($1, $2, $3, $4, $5)`;
        const values = [nome, email, username, password, user_type_id];
        console.log("Entrou2");
        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao criar utilizador:", error);
            throw error;
        }
    },

    async updateUser({ user_id, nome, email, username, password, user_type_id }) {
        const sql = `
            UPDATE "user" 
            SET nome = $1, email = $2, username = $3, password = $4, user_type_id = $5
            WHERE user_id = $6;
        `;
        const values = [nome, email, username, password, user_type_id, user_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao atualizar utilizador:", error);
            throw error;
        }
    },

    async deleteUser({ user_id }) {
        const sql = `
            UPDATE "user" 
            SET active = false
            WHERE user_id = $1;
        `;
        const values = [user_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao apagar utilizador: ", error);
            throw error;
        }
    }, 

    async getUserTypes(){
        const sql = `SELECT * FROM usertype`;

        try {
            const result = await client.query(sql);
            return result;
        } catch (error) {
            console.error("Erro carregar dados: ", error);
            throw error;
        }
    }, 
    
    async getUserTypebyId({user_type_id}){
        const sql = `SELECT * FROM usertype
                    WHERE `;
        const values = [user_type_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro carregar dados: ", error);
            throw error;
        }
    },

    async createUserType({name}){
    const sql = `INSERT INTO usertype(name, active) 
                VALUES($1, 'true')`;
        const values = [name];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao criar Tipo User: ", error);
            throw error;
        }
    }
};

module.exports = UserModel;