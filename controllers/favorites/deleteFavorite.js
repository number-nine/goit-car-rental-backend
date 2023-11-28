const { Favorite } = require("../../models/favorites");
const { ctrlWrapper, HttpError } = require("../../helpers");

const deleteFavorite = async (req, res) => {
  const { id } = req.params;
  let favorite = await Favorite.findOneAndDelete({ vehicle_id: id });

  if (!favorite) {
    throw HttpError(404, "Not found");
  }

  favorite = await favorite.populate("vehicle_id");

  res.json(favorite);
};

module.exports = ctrlWrapper(deleteFavorite);
