const Animal = require('../models/animalModel');

const animalController = {
    createAnimal: (req, res) => {
        const newAnimal = {
            nome: req.body.nome
        };

        Animal.create(newAnimal, (err, animalId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/animals');
        });
    },

    getAnimalById: (req, res) => {
        const animalId = req.params.id;

        Animal.findById(animalId, (err, animal) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!animal) {
                return res.status(404).json({ message: 'Animal not found' });
            }
            res.render('animals/show', { animal });
        });
    },

    getAllAnimals: (req, res) => {
        Animal.getAll((err, animals) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('animals/index', { animals });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('animals/create');
    },

    renderEditForm: (req, res) => {
        const animalId = req.params.id;

        Animal.findById(animalId, (err, animal) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!animal) {
                return res.status(404).json({ message: 'Animal not found' });
            }
            res.render('animals/edit', { animal });
        });
    },

    updateAnimal: (req, res) => {
        const animalId = req.params.id;
        const updatedAnimal = {
            nome: req.body.nome
        };

        Animal.update(animalId, updatedAnimal, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/animals');
        });
    },

    deleteAnimal: (req, res) => {
        const animalId = req.params.id;

        Animal.delete(animalId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/animals');
        });
    }
};

module.exports = animalController;
