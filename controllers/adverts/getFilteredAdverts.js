const { ctrlWrapper } = require("../../helpers");
const { Advert } = require("../../models/advert");

const getFilteredAdverts = async (req, res) => {
  const LIMIT = 12;
  const {
    rentalPrice,
    mileageFrom,
    mileageTo,
    page = 1,
  } = req.query;
  const findFilter = {};

  if (rentalPrice) findFilter.rentalPrice = { $lte: Number(rentalPrice) } ;

  if (mileageFrom) findFilter.mileage = { $gte: Number(mileageFrom) };

  if (mileageTo) findFilter.mileage =  { ...findFilter.mileage, $lte: mileageTo };

  console.log({...findFilter});
  const result = (
    await Advert.aggregate([
      {
        $match: {...findFilter},
      },
      {
        $lookup: {
          from: "favorites",
          localField: "_id",
          foreignField: "vehicle_id",
          as: "isFavorite",
        },
      },
      {
        $set: {
          isFavorite: { $gt: [{ $size: "$isFavorite" }, 0] },
        },
      },
      {
        $facet: {
          metadata: [{ $count: "total" }, { $addFields: { page: page } }],
          data: [{ $skip: LIMIT * (page - 1) }, { $limit: LIMIT }],
        },
      },
    ])
  )[0];

  if (result.metadata.length === 0) {
    result.metadata = { total: 0, page };
  }

  res.json(result);
};

module.exports = ctrlWrapper(getFilteredAdverts);
