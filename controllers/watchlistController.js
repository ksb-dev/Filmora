const Watchlist = require('../models/Watchlist')
const { StatusCodes } = require('http-status-codes')

const getAllWatchlist = async (req, res) => {
  const watchlist = await Watchlist.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  )

  res.status(StatusCodes.OK).json({ watchlist, count: watchlist.length })
}

const addMovie = async (req, res) => {
  req.body.movie_data.createdBy = req.user.userId

  const movie = await Watchlist.create(req.body.movie_data)

  res.status(StatusCodes.CREATED).json({ movie })
}

const deleteMovie = async (req, res) => {
  const movie = await Watchlist.findOne({
    id: req.params.id,
    createdBy: req.user.userId
  })
  const deletedMovie = await Watchlist.findByIdAndDelete({
    _id: movie._id,
    createdBy: req.user.userId
  })

  res.status(StatusCodes.OK).json({ deletedMovie })
}

module.exports = {
  getAllWatchlist,
  addMovie,
  deleteMovie
}
