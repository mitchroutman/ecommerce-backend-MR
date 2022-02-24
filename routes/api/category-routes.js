const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
	await Category.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((deletedCategory) => {
		res.json(`Category removed.`);
	})
	.catch((err) => {
		res.json(err);
	});
});

module.exports = router;
