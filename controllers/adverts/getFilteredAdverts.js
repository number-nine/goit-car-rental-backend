const { ctrlWrapper } = require("../../helpers");
const { Advert } = require("../../models/advert");


const getFilteredAdverts = async (req, res) => {
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
  const result = await Advert.find({})

  res.json(result);
};

module.exports = ctrlWrapper(getFilteredAdverts);
