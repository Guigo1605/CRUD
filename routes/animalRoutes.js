const express = require('express');
const animalController = require('../controllers/animalController');
const router = express.Router();

router.get('/', animalController.getAllAnimal);
router.get('/search', animalController.searchAnimals); // Adicione esta rota
router.get('/new', animalController.renderCreateForm);
router.post('/', animalController.createAnimal);
router.get('/:id', animalController.getAnimalById);
router.get('/:id/edit', animalController.renderEditForm);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;