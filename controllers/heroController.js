const heroModel = require(`../models/heroModel`)

exports.createHero = (req, res) => {
    const newHero = heroModel.create(req.body);
    res.status(201).json(newHero);
}

exports.getAllHeroes = (req, res) => {
    const heroes = heroModel.getAll();
    res.status(200).json(heroes);
}

exports.getHeroById = (req, res) => {
    const hero = heroModel.getById(req.params.id);

    if (!hero) {
        return res.status(404).json({ message: 'Hero not found' });
    }
    res.status(200).json(hero);
}

exports.updateHero = (req, res) => {
    const updatedHero = heroModel.update(req.params.id, req.body);

    if (!updatedHero) {
        return res.status(404).json({ message: 'Hero not found' });
    }
    res.status(200).json(updatedHero);
}

exports.deleteHero = (req, res) => {
    const success = heroModel.delete(req.params.id);

    if (!success) {
        return res.status(404).json({ message: 'Hero not found' });
    }
    res.status(200).send();
}