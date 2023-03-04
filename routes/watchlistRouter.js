const express = require('express')
const router = express.Router()

const {
  getAllWatchlist,
  addMovie,
  deleteMovie
} = require('../controllers/watchlistController')

router.get('/', getAllWatchlist)
router.post('/', addMovie)
router.delete('/:id', deleteMovie)

module.exports = router
