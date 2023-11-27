const { ctrlWrapper } = require("../../helpers");
const { Advert } = require("../../models/advert");

const getFilters = async (req, res) => {
  // const { filter, name, page, limit } = req.query;
  // const findFilter = {};
  // let result = [];
  // let total = 0;

  // const category = Object.keys(endpoints).find(
  //   (endpoint) => endpoints[endpoint].filter === filter
  // );
  // if (category) {
  //   findFilter[endpoints[category].field] = name;
  // }

  // result = await Exercise.find(findFilter, {}, paginationParams(page, limit));

  // total = await Exercise.countDocuments(findFilter);
  // const result = await Advert.find({})

  const result = await Advert.aggregate([
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
  ]);

  console.log(result);
  const {rentalPrice} = result

  const result1 = await Advert.aggregate([
    // {
    //   $group: {
    //     _id: "$make",
    //   },
    // },
    // {
    //   $sort: {
    //     _id: 1,
    //   },
    // },
    {
      $group: {
        _id: null,
        makes: { $addToSet: "$make" },
      },
    },
    { $unwind: "$makes" },
    { $sort: { makes: 1 } },
    { $group: { _id: null, makes: { $push: "$makes" } } },

    // { $set: { sortArray: { input: "$makes", sortBy: 1 } } },
    // {
    //   $sort: {
    //     makes: 1,
    //   },
    // },
  ]);

  const {makes} = result1

  res.json(result);
};

module.exports = ctrlWrapper(getFilters);
