const { ctrlWrapper } = require("../../helpers");
const { Favorite } = require("../../models/favorites");

const getFavorites = async (req, res) => {
  const LIMIT = 12;
  const { page = 1 } = req.query;

  const result = (
    await Favorite.aggregate([
      {
        $match: {},
      },
      {
        $lookup: {
          from: "adverts",
          localField: "vehicle_id",
          foreignField: "_id",
          as: "vehicle",
        },
      },
      { $unwind: "$vehicle" },
      { $set: { "vehicle.isFavorite": true } },
      {
        $facet: {
          metadata: [
            { $count: "total" },
            { $addFields: { page: Number(page) } },
          ],
          data: [{ $skip: LIMIT * (page - 1) }, { $limit: LIMIT }],
        },
      },
    ])
  )[0];

  if (result.metadata.length === 0) {
    result.metadata = [{ total: 0, page }];
  }

  res.json(result);
};

module.exports = ctrlWrapper(getFavorites);
