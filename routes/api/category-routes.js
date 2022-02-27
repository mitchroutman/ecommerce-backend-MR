const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  })
  .then(allCat => res.json(allCat))

});

  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then(singleCat => res.json(singleCat))
});

//create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then(newCat => res.json(newCat))
});

//update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(updateCat => res.json(updateCat))
});

//delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(goneCat => res.json(goneCat))
});

module.exports = router;
