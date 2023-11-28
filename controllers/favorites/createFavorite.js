const { Favorite } = require("../../models/favorites");
const { ctrlWrapper } = require("../../helpers");

const createFavorite = async (req, res) => {
  const { id } = req.body;

  let favorite = await Favorite.create({
    vehicle_id: id,
  });

  favorite = await favorite.populate("vehicle_id");

  res.json(favorite);
};

module.exports = ctrlWrapper(createFavorite);
