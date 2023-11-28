const { ctrlWrapper } = require("../../helpers");
const { Advert } = require("../../models/advert");

const getFilters = async (req, res) => {
  const { rentalPrice } = (
    await Advert.aggregate([
      {
        $group: {
          _id: null,
          max: { $max: "$rentalPrice" },
          min: { $min: "$rentalPrice" },
        },
      },
      {
        $project: {
          rentalPrice: { max: "$max", min: "$min" },
        },
      },
    ])
  )[0];

   const { mileage } = (
     await Advert.aggregate([
       {
         $group: {
           _id: null,
           max: { $max: "$mileage" },
           min: { $min: "$mileage" },
         },
       },
       {
         $project: {
           mileage: { max: "$max", min: "$min" },
         },
       },
     ])
   )[0];

  const { makes } = (
    await Advert.aggregate([
      {
        $group: {
          _id: null,
          makes: { $addToSet: "$make" },
        },
      },
      { $unwind: "$makes" },
      { $sort: { makes: 1 } },
      { $group: { _id: null, makes: { $push: "$makes" } } },
    ])
  )[0];

  res.json({ makes, rentalPrice, mileage });
};

module.exports = ctrlWrapper(getFilters);
