const db = require('../config/db');

const Usuario = {
    create: (animal, callback) => {
        const query = 'INSERT INTO animal (nome, data_nasc, RGA, descricao) VALUES (?, ?, ?)';
        db.query(query, [animal.nome, animal.data_nasc, animal.RGA, animal.descricao], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM animal WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByNome: (nome, callback) => {
        const query = 'SELECT * FROM animal WHERE nome = ?';
        db.query(query, [usuarioname], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, animal, callback) => {
        const query = 'UPDATE animal SET nome = ?, data_nasc = ?, RGA = ?, descricao = ?, WHERE id = ?';
        db.query(query, [animal.nome, usuario.data_nasc, animal.RGA, animal.descricao, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM animal WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM animal';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    searchByName: (nome, callback) => {
        const query = 'SELECT * FROM animal WHERE nome LIKE ?';
        db.query(query, [`%${nome}%`], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },    
};

module.exports = animal;
