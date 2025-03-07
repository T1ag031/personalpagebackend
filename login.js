const jwt = require("jsonwebtoken");
const client = require('./db');

const SECRET_KEY = process.env.JWT_SECRET || "key";
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const query = 'select * from "user" where username = $1 and password = $2';
        const values = [username, password];

        const result = await client.query(query, values);
        const user = result.rows;

        if (user.length === 0) {
            return res.status(404).json({ message: 'Username ou Password errados.' , success: false });
        }

        const token = jwt.sign({ user_id: user.user_id }, SECRET_KEY, { expiresIn: "24h" });

        res.status(200).json({message: 'Login efetuado com sucesso.',
            success: true,
            data: user,
            token: token});
    } catch (error) {
        console.error('Erro ao efetuar Login:', error);
        res.status(500).json({ error: 'Erro ao efetuar Login' });
    }
};

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.', success: false });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido.', success: false });
        }

        req.user = user;
        next();
    });
};
module.exports = { login, authenticateToken};