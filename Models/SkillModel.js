const client = require('../db');

const SkillModel = {
    async getAllSkills(){
        const sql = `SELECT s.skill_id, s.name, s.description, s.level, s.me_id, s.skill_type_id, st.name
                        FROM skill s 
                        INNER JOIN skill_type st on st.skill_type_id = s.skill_type_id`;
        try {
            const result = await client.query(sql);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async getSkillbyId({skill_id}){
        const sql = `SELECT s.skill_id, s.name, s.description, s.level, s.me_id, s.skill_type_id, st.name
                        FROM skill s 
                        INNER JOIN skill_type st on st.skill_type_id = s-skill_type_id
                        WHERE s.skill_id = $1`;

        const values = [skill_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async createSkill({name, description, level, me_id, skill_type_id}){
        const sql = `INSER INTO skill(name, description, level, me_id, skill_type_id)
                        VALUES ($1, $2, $3, $4, $5)`;

        const values = [name, description, level, me_id, skill_type_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async updateSkill({skill_id, name, description, level, me_id, skill_type_id}){
        const sql = `UPDATE skill
                    SET name = $1, description = $2, level = $3, me_id = $4, skill_type_id = $5
                    WHERE skill_id = $6`;
        const values = [name, description, level, me_id, skill_type_id, skill_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async deleteSkill({skill_id}){
        const sql = `DELETE FROM skill
                    WHERE skill_id = $1`;
        const values = [skill_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async getSkillTypes(){
        const sql = `SELECT * FROM skill_type ORDER BY skill_type_id`;
        try {
            const result = await client.query(sql);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async getSkillTypebyId({skill_type_id}){
        const sql = `SELECT * FROM skill_type WHERE skill_type_id = $1`;
        const values = [skill_type_id];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    },

    async createSkillType({name, description}){
        const sql = `INSERT INTO skill_type(name, description, active)
                    VALUES ($1, $2, true)`;
        const values = [name, description];

        try {
            const result = await client.query(sql, values);
            return result;
        } catch (error) {
            console.error("Erro ao carregar dados: ", error);
            throw error;
        }
    }
}

module.exports = SkillModel;