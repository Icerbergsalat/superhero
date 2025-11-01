const express = require('express');
const router = express.Router();

const heroController = require('../controllers/heroController');
const { validateHero } = require('../middlewares/heroMiddleware');

router.post(`/`, validateHero, heroController.createHero);
router.get(`/`, heroController.getAllHeroes);
router.get(`/:id`, heroController.getHeroById);
router.put(`/:id`, validateHero, heroController.updateHero);
router.delete(`/:id`, heroController.deleteHero);

module.exports = router;